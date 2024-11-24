import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import "./styles.css";

const MenuList4 = ({ collapsed, onMenuClick }) => {
  return (
    <ul className="menu-list">
      <li
        className="menu-item active"
        onClick={() => onMenuClick("servicos")}
      >
        <HiOutlineFolder className="menu-icon" />
        {!collapsed && <span>Serviços</span>}
      </li>
    </ul>
  );
};

export default MenuList4
