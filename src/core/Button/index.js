import React from "react";
import style from "./style.module.scss";

export const Button = props => {
    return (
        <button 
            className={`${style.button} ${props.color ? style[props.color] : ''} ${props.size  ? style[props.size]  : ''} ${props.type  ? style[props.type]  : ''} ${props.text ? style.text : ''} ${props.icon ? style.icon : ''}`} 
            disabled={props.disabled}
            onClick={props.clicked}
            title={props.text}
        >
            <i className={props.icon}/>

            {props.text}
        </button>
    );
}