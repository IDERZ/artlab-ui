import React from "react";
import style from "./style.module.scss";

export const TextField = (props) => {

    return (
        <input type={props.type} style={{width : props.width}}
            className={`${style.textField} ${props.stretch ? style[props.stretch] : ''} ${props.size ? style[props.size] : ''} ${props.validation ? style[props.validation] : ''}`}
            onChange={props.valueChanged}
            placeholder={props.placeholder}
            disabled={props.disabled}/>
    );
}