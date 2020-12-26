import React from "react";
import style from "./style.module.scss";

export const Button = props => {
    return (
        <button 
            className={`${style.button} ${style[props.color]}`} 
            disabled={props.disabled}
            onClick={props.clicked}>
            {props.text}
        </button>
    );
}