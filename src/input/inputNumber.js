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

    const className = {
        size      : props.size       ? (' ' + css[props.size])       : '',
        valid     : props.validation ? (' ' + css[props.validation]) : '',
        stretched : props.stretched  ? (' ' + css.stretched)         : '',
        textAlign : props.textAlign  ? (' ' + css[props.textAlign])  : '',
        prepend   : props.prepend    ? (' ' + css.prepend       )    : ' hidden',
        append    : props.append     ? (' ' + css.append        )    : ' hidden',
    }

    return (
        <div className={`${css.inputDiv}${className.size}${className.stretched}${className.textAlign}`}
             style={{width:props.width,
                     marginTop:props.marginTop,
                     marginRight:props.marginRight,
                     marginBottom:props.marginBottom,
                     marginLeft:props.marginLeft}}>
            <div className={`${className.prepend}`}>
                {props.prepend}
            </div>
            <NumberFormat thousandSeparator={props.thousandSeparator} 
                          decimalSeparator={props.decimalSeparator}
                          format={props.format} 
                          mask={props.mask}
                          allowEmptyFormatting      
                          decimalScale={props.decimalScale}
                          fixedDecimalScale={props.decimalScale > 0 ? true : false}
                          value={props.value}
                          placeholder={props.placeholder}
                          disabled={props.disabled}
                          onFocus={(e) => e.target.select()}
                          onValueChange={props.valueChanged}/>
            <div className={`${className.append}`}>
                {props.append}
            </div>
        </div>
    )
}

InputNumber.propTypes = {
    size         : PropTypes.oneOf(['small', 'medium', 'large']),
    width        : PropTypes.number,
    placeholder  : PropTypes.string,
    stretched    : PropTypes.bool,
    disabled     : PropTypes.bool,
    validation   : PropTypes.oneOf(['error', 'success']),
    textAlign    : PropTypes.oneOf(['left', 'right', 'center']),
    value        : PropTypes.any,
    valueChanged : PropTypes.func,
    prepend      : PropTypes.any,
    append       : PropTypes.any,
    marginTop    : PropTypes.number,
    marginRight  : PropTypes.number,
    marginBottom : PropTypes.number,
    marginLeft   : PropTypes.number
};

InputNumber.defaultProps = {
    size     : 'small',
    stretch  : false,
    disabled : false,
    textAlign : "right"
};

export default InputNumber;