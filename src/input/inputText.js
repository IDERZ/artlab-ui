import React from "react";
import PropTypes from "prop-types";

import css from "./style.module.scss";

const InputText = (props) => {

    const className = {
        size      : props.size       ? (' ' + css[props.size])       : '',
        valid     : props.validation ? (' ' + css[props.validation]) : '',
        stretched : props.stretched  ? (' ' + css.stretched)         : '',
        textAlign : props.textAlign  ? (' ' + css[props.textAlign])  : '',
        prepend   : props.prepend    ? (' ' + css.prepend       )    : ' hidden',
        append    : props.append     ? (' ' + css.append        )    : ' hidden',
    }
    
    return (
        <div className={`${css.inputDiv}${className.size}${className.valid}${className.stretched}`}
        style={{width:props.width,
                marginTop:props.marginTop,
                marginRight:props.marginRight,
                marginBottom:props.marginBottom,
                marginLeft:props.marginLeft}}>
                <div className={`${className.prepend}`}>
                    {props.prepend}
                </div>
                <input type="text"
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    onChange={props.valueChanged}
                    defaultValue={props.value}
                />
                <div className={`${className.append}`}>
                    {props.append}
                </div>
        </div>
    );
}

InputText.propTypes = {
    size         : PropTypes.oneOf(['small', 'medium', 'large']),
    width        : PropTypes.number,
    float        : PropTypes.string,
    placeholder  : PropTypes.string,
    stretched    : PropTypes.bool,
    disabled     : PropTypes.bool,
    validation   : PropTypes.oneOf(['error', 'success']),
    textAlign    : PropTypes.oneOf(['left', 'right', 'center']),
    value        : PropTypes.string,
    valueChanged : PropTypes.func,
    prepend      : PropTypes.any,
    append       : PropTypes.any,
    marginTop    : PropTypes.number,
    marginRight  : PropTypes.number,
    marginBottom : PropTypes.number,
    marginLeft   : PropTypes.number
};

InputText.defaultProps = {
    size      : 'small',
    stretched : false,
    disabled  : false,
    textAlign : 'left'
};

export default InputText;