import React from "react";
import style from "./style.module.scss";

export const TextField = (props) => {

    return (
        <div className={`${style.textField} ${props.size ? style[props.size] : ''} ${props.stretch ? style.stretch : ''} ${props.icon ? style.icon : ''}`}
             style={props.style}>
            <span className={style.img}>
                <i className={props.icon}></i>
            </span>
            <input type="text"
                className={`${props.validation ? style[props.validation] : ''}`}
                onChange={props.valueChanged}
                placeholder={props.placeholder}
                disabled={props.disabled}
                value={props.value}/>
        </div>
    );
}