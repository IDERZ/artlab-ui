import React from "react";
import style from "./style.module.scss";

/*
 * react-number-format - 4.4.2
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2020 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format.git
 */
import NumberFormat from "react-number-format";

export const InputNumber = (props) => {

    // props
    const size        = props.size ? style[props.size] : '';
    const stretch     = props.stretch ? style.stretch : '';
    const icon        = props.icon ? style.icon : '';
    const textAlign   = props.textAlign === 'right' ? style.textRight : '';
    const displayType = props.readOnly ? 'text' : '';

    return (
        <div className={`${style.alInput} ${style.alNumber} ${size} ${stretch} ${icon} ${textAlign}`}
            style={props.style}>
            <span className={style.img}>
                <i className={props.icon}></i>
            </span>
            <span>{props.readOnly}</span>
            <NumberFormat thousandSeparator={props.thousandSeparator} 
                          decimalSeparator={props.decimalSeparator}
                          format={props.format} 
                          mask={props.mask}
                          prefix={props.prefix}
                          suffix={props.suffix}
                          inputMode={props.inputMode}
                          allowEmptyFormatting={props.allowEmptyFormatting}
                          displayType={displayType}
                          decimalScale={props.decimalScale}
                          fixedDecimalScale={props.decimalScale > 0 ? true : false}
                          value={props.value}
                          onValueChange={props.valueChanged}
                          placeholder={props.placeholder}
                          disabled={props.disabled}
                          onFocus={(e) => e.target.select()}/>
        </div>
    )
}