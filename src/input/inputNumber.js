import React from "react";
import PropTypes from "prop-types";
/*
 * react-number-format - 4.4.2
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2020 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format.git
 */
import NumberFormat from "react-number-format";
import css from "./style.module.scss";

const InputNumber = (props) => {

    // props
    const size        = props.size ? css[props.size] : '';
    const stretch     = props.stretch ? css.stretch : '';
    const icon        = props.icon ? css.icon : '';
    const textAlign   = props.textAlign === 'right' ? css.textRight : '';
    const displayType = props.readOnly ? 'text' : '';

    return (
        <div className={`${css.inputDiv} ${css.alNumber} ${size} ${stretch} ${icon} ${textAlign}`}
            style={props.style}>
            <span className={css.img}>
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

export default InputNumber;