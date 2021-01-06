import React from "react";
import PropTypes from "prop-types";

import css from "./style.module.scss";

const InputText = (props) => {

    const className = {
        size     : props.size       ? (' ' + css[props.size]) : '',
        valid    : props.validation ? (' ' + css[props.validation]) : '',
        stretch  : props.stretch    ? (' ' + css.stretch) : '',
        preprend : props.prepend    ? (' ' + css.prepend       ) : ' hidden',
        append   : props.append     ? (' ' + css.append        ) : ' hidden',
    }
    
    return (
        <div className={`${css.inputDiv}${className.size}${className.valid}${className.stretch}`}
            style={{width: props.width, float: props.float}}>
                <div className={`${className.preprend}`}>
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
    stretch      : PropTypes.bool,
    disabled     : PropTypes.bool,
    validation   : PropTypes.oneOf(['error', 'success']),
    value        : PropTypes.string,
    valueChanged : PropTypes.func,
    prepend      : PropTypes.any,
    append       : PropTypes.any
};

InputText.defaultProps = {
    size     : 'small',
    stretch  : false,
    disabled : false,
};

export default InputText;