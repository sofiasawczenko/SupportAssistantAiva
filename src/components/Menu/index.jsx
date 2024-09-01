import {
  CommentOutlined,
  MenuOutlined,
  RobotOutlined,
  SearchOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import React, { useState } from "react";
import { IconWrapper, MenuWrapper } from "./styles";

const Menu = ({ onSelect }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("chatbot");

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const handleIconClick = (item) => {
    setActiveItem(item);
    onSelect(item);
  };

  const getIconStyle = (item) => ({
    color: activeItem === item ? "#44D4C6" : "#797979",
    fontSize: activeItem === item ? "26px" : "22px",
    marginBottom: "1.7rem",
  });

  return (
    <>
      {!menuVisible ? (
        <IconWrapper
          onClick={toggleMenu}
          style={{ color: "#797979", position: "absolute", top: 16, right: 20 }}
        >
          <Tooltip title="Abrir Menu">
            <MenuOutlined style={{ fontSize: "20px" }} />
          </Tooltip>
        </IconWrapper>
      ) : (
        <MenuWrapper>
          <IconWrapper
            onClick={toggleMenu}
            style={{
              color: "#797979",
              position: "relative",
              marginBottom: "4rem",
            }}
          >
            <Tooltip title="Fechar Menu">
              <MenuOutlined style={{ fontSize: "20px" }} />
            </Tooltip>
          </IconWrapper>
          <div>
            <IconWrapper
              onClick={() => handleIconClick("chatbot")}
              style={getIconStyle("chatbot")}
            >
              <Tooltip title="Chat" placement="left">
                <CommentOutlined />
              </Tooltip>
            </IconWrapper>
            <IconWrapper
              onClick={() => handleIconClick("form")}
              style={getIconStyle("form")}
            >
              <Tooltip title="Templates" placement="left">
                <SolutionOutlined />
              </Tooltip>
            </IconWrapper>
            <IconWrapper
              onClick={() => handleIconClick("ticket")}
              style={getIconStyle("ticket")}
            >
              <Tooltip title="Novo Ticket" placement="left">
                <SearchOutlined />
              </Tooltip>
            </IconWrapper>
            <IconWrapper
              onClick={() => handleIconClick("training")}
              style={getIconStyle("training")}
            >
              <Tooltip title="Novo Treinamento" placement="left">
                <RobotOutlined />
              </Tooltip>
            </IconWrapper>
            <IconWrapper
              onClick={() => handleIconClick("profile")}
              style={getIconStyle("profile")}
            >
              <Tooltip title="Perfil" placement="left">
                <UserOutlined />
              </Tooltip>
            </IconWrapper>
          </div>
        </MenuWrapper>
      )}
    </>
  );
};

export default Menu;
