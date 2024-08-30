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
import { IconWrapper, MenuTopIcons, MenuWrapper } from "./styles";

const Menu = ({ onSelect }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("chatbot");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleIconClick = (item) => {
    setActiveItem(item);
    onSelect(item);
  };

  return (
    <>
      {!menuVisible && (
        <IconWrapper
          onClick={toggleMenu}
          style={{ color: "#44d4c6", position: "absolute", top: 16, right: 20 }}
        >
          <Tooltip title="Abrir Menu">
            <MenuOutlined style={{ fontSize: "20px" }} />
          </Tooltip>
        </IconWrapper>
      )}

      {menuVisible && (
        <MenuWrapper>
          <IconWrapper
            onClick={toggleMenu}
            style={{
              color: "#44d4c6",
              position: "relative",
              marginBottom: "4rem",
            }}
          >
            <Tooltip title="Fechar Menu">
              <MenuOutlined style={{ fontSize: "20px" }} />
            </Tooltip>
          </IconWrapper>
          <MenuTopIcons>
            <IconWrapper
              onClick={() => handleIconClick("chatbot")}
              style={{
                color: activeItem === "chatbot" ? "#d0f8f4" : "#44d4c6",
                fontSize: activeItem === "chatbot" ? "26px" : "22px",
                marginBottom: "1.7rem",
              }}
            >
              <Tooltip title="Chat" placement="left">
                <CommentOutlined />
              </Tooltip>
            </IconWrapper>

            <IconWrapper
              onClick={() => handleIconClick("form")}
              style={{
                color: activeItem === "form" ? "#d0f8f4" : "#44d4c6",
                fontSize: activeItem === "form" ? "26px" : "22px",
                marginBottom: "1.7rem",
              }}
            >
              <Tooltip title="Templates" placement="left">
                <SolutionOutlined />
              </Tooltip>
            </IconWrapper>

            <IconWrapper
              onClick={() => handleIconClick("ticket")}
              style={{
                color: activeItem === "ticket" ? "#d0f8f4" : "#44d4c6",
                fontSize: activeItem === "ticket" ? "26px" : "22px",
                marginBottom: "1.7rem",
              }}
            >
              <Tooltip title="Novo Ticket" placement="left">
                <SearchOutlined />
              </Tooltip>
            </IconWrapper>

            <IconWrapper
              onClick={() => handleIconClick("training")}
              style={{
                color: activeItem === "training" ? "#d0f8f4" : "#44d4c6",
                fontSize: activeItem === "training" ? "26px" : "22px",
                marginBottom: "1.7rem",
              }}
            >
              <Tooltip title="Novo Treinamento" placement="left">
                <RobotOutlined />
              </Tooltip>
            </IconWrapper>
            <IconWrapper
              onClick={() => handleIconClick("profile")}
              style={{
                color: activeItem === "profile" ? "#d0f8f4" : "#44d4c6",
                fontSize: activeItem === "profile" ? "26px" : "22px",
              }}
            >
              <Tooltip title="Perfil" placement="left">
                <UserOutlined />
              </Tooltip>
            </IconWrapper>
          </MenuTopIcons>
          {/* <MenuBottomIcons>
            <IconWrapper 
              onClick={() => handleIconClick('settings')} 
              style={{ color: activeItem === 'settings' ? '#d0f8f4' : '#44d4c6', fontSize: activeItem === 'settings' ? '26px' : '22px', marginBottom: '1.7rem' }}
            >
              <Tooltip title="Configurações" placement="left">
                <SettingOutlined />
              </Tooltip>
            </IconWrapper>
          </MenuBottomIcons> */}
        </MenuWrapper>
      )}
    </>
  );
};

export default Menu;
