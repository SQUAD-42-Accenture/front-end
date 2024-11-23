import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineFolder } from "react-icons/hi";
import "./style.css";

const MenuList3 = ({ collapsed, onMenuClick }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
    setActiveMenuItem(subMenuOpen ? "" : "Cadastro"); 
  };

  return (
    <ul className="menu-list">
      <li
        className={`menu-item ${activeMenuItem === "Início" ? "active" : ""}`}
        onClick={() => {
          setActiveMenuItem("Início");
          onMenuClick("inicio");
        }}
      >
        <AiOutlineHome className="menu-icon" />
        {!collapsed && <span>Início</span>}
      </li>

      <li
        className={`menu-item ${activeMenuItem === "Cadastro" ? "active" : ""}`}
        onClick={toggleSubMenu}
      >
        <AiOutlineUser className="menu-icon" />
        {!collapsed && (
          <span>
            Cadastro <BiChevronDown className="chevron-icon" />
          </span>
        )}
      </li>

      {subMenuOpen && ( 
        <ul className="submenu-list">
          <li
            className="submenu-item"
            onClick={() => {
              setActiveMenuItem("Cliente");
              onMenuClick("clientes");
            }}
          >
            Cliente
          </li>
          <li
            className="submenu-item"
            onClick={() => {
              setActiveMenuItem("Técnico");
              onMenuClick("tecnico");
            }}
          >
            Técnico
          </li>
        </ul>
      )}

      <li
        className={`menu-item ${activeMenuItem === "Serviços" ? "active" : ""}`}
        onClick={() => {
          setActiveMenuItem("Serviços");
          onMenuClick("servicos"); 
        }}
      >
        <HiOutlineFolder className="menu-icon" />
        {!collapsed && <span>Serviço</span>}
      </li>

      <li
        className={`menu-item ${activeMenuItem === "Dashboard" ? "active" : ""}`}
        onClick={() => {
          setActiveMenuItem("Dashboard");
          onMenuClick("dashboard");
        }}
      >
        <FaChartLine className="menu-icon" />
        {!collapsed && <span>Dashboard</span>}
      </li>
    </ul>
  );
};

export default MenuList3;
