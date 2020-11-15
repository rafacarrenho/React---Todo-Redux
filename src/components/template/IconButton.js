import React from "react";
import { ReactComponent as TrashIcon } from "../../assets/trash-alt-solid.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus-solid.svg";
import { ReactComponent as RedoIcon } from "../../assets/redo-alt-solid.svg";
import { ReactComponent as CheckIcon } from "../../assets/check-solid.svg";
import { ReactComponent as CloseIcon } from "../../assets/times-solid.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-solid.svg";
import "./IconButton.css";

const IconButton = ({ customStyle, disabled, onClick, icon, title }) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`btn btn-${customStyle}`}
        onClick={onClick}
        title={title}
      >
        {icon === "trash" ? <TrashIcon /> : ""}
        {icon === "plus" ? <PlusIcon /> : ""}
        {icon === "redo" ? <RedoIcon /> : ""}
        {icon === "check" ? <CheckIcon /> : ""}
        {icon === "close" ? <CloseIcon /> : ""}
        {icon === "search" ? <SearchIcon /> : ""}
      </button>
    </>
  );
};

export default IconButton;
