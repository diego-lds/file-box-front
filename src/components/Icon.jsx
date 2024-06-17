import React from "react";
import PropTypes from "prop-types";
import { FiPlus, FiMinus, FiSearch, FiUser } from "react-icons/fi";

const IconComponent = ({ icon, color }) => {
  let Icon = FiPlus; // Ícone padrão, caso nenhum seja passado

  const iconMap = {
    plus: FiPlus,
    minus: FiMinus,
    search: FiSearch,
    user: FiUser,
  };

  return <span>{icon}</span>;
};

export default IconComponent;
