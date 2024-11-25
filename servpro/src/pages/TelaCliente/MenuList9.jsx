// import React from "react";
// import { HiOutlineFolder } from "react-icons/hi";
// import { HiOutlineUser } from "react-icons/hi"; 
// import "./styles.css";

// const MenuList9 = ({ collapsed, onMenuClick }) => {
//   return (
//     <ul className="menu-list">
//       <li
//         className="menu-item active"
//         onClick={() => onMenuClick("servicos")}
//       >
//         <HiOutlineFolder className="menu-icon" />
//         {!collapsed && <span>Serviços</span>}
//       </li>
//       <li
//         className="menu-item"
//         onClick={() => onMenuClick("cliente")}
//       >
//         <HiOutlineUser className="menu-icon" />
//         {!collapsed && <span>Cliente</span>}
//       </li>
//     </ul>
//   );
// };

// export default MenuList9;

import React from "react";
import { HiOutlineFolder } from "react-icons/hi"; 
import { useNavigate } from "react-router-dom";
// import "./styles.css";

const MenuList9 = ({ collapsed }) => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/telacliente");
  };

  return (
    <ul className="menu-list">
      <li
        className="menu-item active"
        onClick={handleMenuClick}
      >
        <HiOutlineFolder className="menu-icon" />
        {!collapsed && <span>Serviços</span>}
      </li>
    </ul>
  );
};

export default MenuList9;
