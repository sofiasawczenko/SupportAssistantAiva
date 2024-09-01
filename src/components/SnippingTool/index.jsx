import {
  CloseOutlined,
  CopyOutlined,
  DownloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Tooltip, message } from "antd";
import React from "react";
import { ScreenCapture } from "react-screen-capture";

class SnippingTool extends React.Component {
  state = {
    screenCapture: "",
  };

  handleScreenCapture = (screenCapture) => {
    this.setState({ screenCapture });
  };

  handleSave = () => {
    const { screenCapture } = this.state;
    if (screenCapture) {
      const downloadLink = document.createElement("a");
      const fileName = "react-screen-capture.png";

      downloadLink.href = screenCapture;
      downloadLink.download = fileName;
      downloadLink.click();
      message.success("Imagem baixada com sucesso!");
    } else {
      message.error("Nenhuma imagem para baixar!");
    }
  };

  handleCopy = () => {
    const { screenCapture } = this.state;
    if (screenCapture) {
      navigator.clipboard
        .writeText(screenCapture)
        .then(() =>
          message.success("Imagem copiada para a área de transferência!")
        )
        .catch(() => message.error("Falha ao copiar a imagem."));
    } else {
      message.error("Nenhuma imagem para copiar!");
    }
  };

  handleClose = () => {
    this.setState({ screenCapture: "" });
    message.info("Captura de tela fechada.");
  };

  handleSendToAI = () => {
    const { screenCapture } = this.state;
    if (screenCapture) {
      message.info("Imagem enviada para a Inteligência Artificial.");
    } else {
      message.error("Nenhuma imagem para enviar.");
    }
  };

  render() {
    const { screenCapture } = this.state;

    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <div style={{ textAlign: "center" }}>
            <Button
              type="primary"
              onClick={onStartCapture}
              style={{
                background: "#44D4C6",
                color: "black",
                marginTop: "10px",
              }}
            >
              Capturar
            </Button>
            <div style={{ marginTop: "10px" }}>
              {screenCapture && (
                <>
                  <img
                    src={screenCapture}
                    alt="react-screen-capture"
                    style={{ maxWidth: "100%", marginBottom: "10px" }}
                  />
                  <div>
                    <Tooltip title="Download">
                      <Button
                        type="default"
                        icon={<DownloadOutlined />}
                        onClick={this.handleSave}
                      >
                        Download
                      </Button>
                    </Tooltip>
                    <Tooltip title="Copy to clipboard">
                      <Button
                        type="default"
                        icon={<CopyOutlined />}
                        onClick={this.handleCopy}
                      >
                        Copiar
                      </Button>
                    </Tooltip>
                    <Tooltip title="Close capture">
                      <Button
                        type="default"
                        icon={<CloseOutlined />}
                        onClick={this.handleClose}
                      >
                        Fechar
                      </Button>
                    </Tooltip>
                    <Tooltip title="Send to AI">
                      <Button
                        type="default"
                        icon={<UploadOutlined />}
                        onClick={this.handleSendToAI}
                      >
                        Enviar Imagem ao Chatbot
                      </Button>
                    </Tooltip>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </ScreenCapture>
    );
  }
}

export default SnippingTool;
