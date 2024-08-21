import React, { useState, useRef } from 'react';
import html2canvas from 'react-html2canvas';
import styled from 'styled-components';
import { SelectionBox, Dialog } from './styles';

const ScreenshotTool = () => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selection, setSelection] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [showDialog, setShowDialog] = useState(false);
  const [canvasImage, setCanvasImage] = useState(null);

  const selectionRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsSelecting(true);
    const { pageX: startX, pageY: startY } = event;
    setSelection({ x: startX, y: startY, width: 0, height: 0 });
  };

  const handleMouseMove = (event) => {
    if (!isSelecting) return;
    const { pageX, pageY } = event;
    const { x: startX, y: startY } = selection;
    setSelection({
      x: Math.min(startX, pageX),
      y: Math.min(startY, pageY),
      width: Math.abs(startX - pageX),
      height: Math.abs(startY - pageY),
    });
  };

  const handleMouseUp = async () => {
    setIsSelecting(false);
    setShowDialog(true);

    const canvas = await html2canvas(document.body, {
      x: selection.x,
      y: selection.y,
      width: selection.width,
      height: selection.height,
      useCORS: true,
    });

    setCanvasImage(canvas.toDataURL('image/png'));
  };

  const saveScreenshot = () => {
    const link = document.createElement('a');
    link.href = canvasImage.replace('image/png', 'image/octet-stream');
    link.download = 'SCREENSHOT_.png';
    link.click();
    setShowDialog(false);
  };

  const editScreenshot = () => {
    // Implement editing functionality here
  };

  return (
    <>
      <SelectionBox
        ref={selectionRef}
        style={{
          left: `${selection.x}px`,
          top: `${selection.y}px`,
          width: `${selection.width}px`,
          height: `${selection.height}px`,
        }}
        className={isSelecting ? '' : 'complete'}
      />
      <button onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        Capture
      </button>
      <Dialog visible={showDialog}>
        <div className="header">
          <button onClick={saveScreenshot}>Save Image</button>
          <button onClick={editScreenshot}>Edit Image</button>
        </div>
        {canvasImage && <img src={canvasImage} alt="Screenshot" />}
      </Dialog>
    </>
  );
};

export default ScreenshotTool;
