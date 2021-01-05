import React from "react";
import style from "./style.module.scss";


import NumberFormat from "react-number-format";
import moment from "moment";

export const InputDate = (props) => {

    // props
    const size        = props.size ? style[props.size] : '';
    const stretch     = props.stretch ? style.stretch : '';
    const icon        = props.icon ? style.icon : '';
    const textAlign   = props.textAlign === 'right' ? style.textRight : '';
    // const displayType = props.readOnly ? 'text' : '';

    let a = moment.months();

    return (
        <div className={`${style.alInput} ${style.alNumber} ${size} ${stretch} ${icon} ${textAlign}`}
            style={props.style}>
            <span className={style.img}>
                <i className={props.icon}></i>
            </span>
            <span>{props.readOnly}</span>
            <NumberFormat format="####-##-## ##:##" mask="_" allowEmptyFormatting/>

            <div>
            {a.map(m => (
                <span>{m}</span>
            ))}
            </div>
        </div>
    )
}