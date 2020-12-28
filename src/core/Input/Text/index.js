import React from "react";

import inputStyle from "./style.module.scss";

export const InputText = (props) => {

    return (
        <div className={`${inputStyle.alInput} ${props.size ? inputStyle[props.size] : ''} ${props.stretch ? inputStyle.stretch : ''} ${props.icon ? inputStyle.icon : ''} ${props.validation ? inputStyle[props.validation] : ''}`}
            style={props.style}>
            <span className={inputStyle.img}>
                <i className={props.icon}></i>
            </span>
            <input type="text"
                onChange={props.valueChanged}
                placeholder={props.placeholder}
                disabled={props.disabled}/>
        </div>
    );
}