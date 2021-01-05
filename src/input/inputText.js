import React from "react";
import PropTypes from "prop-types";

import css from "./style.module.scss";

const InputText = (props) => {

    const size     = props.size       ? ' ' + css[props.size]       : '';
    const stretch  = props.stretch    ? ' ' + css.stretch           : '';
    const icon     = props.icon       ? ' ' + css.icon              : '';
    const valid    = props.validation ? ' ' + css[props.validation] : '';
    const preprend = props.prepend    ? ' ' + css["prepend"]        : 'hidden';

    return (
        <div className={`${css.inputDiv}${size}${stretch}${icon}${valid}`}
            style={{width: props.width, float: props.float}}>
            <span className={preprend}>
                {props.prepend}
            </span>
            <input type="text"
                   placeholder={props.placeholder}
                   disabled={props.disabled}
                   onChange={props.valueChanged}
            />
            <span className={css.append}>
                {props.append}
            </span>
        </div>
    );
}

InputText.propTypes = {
    // size : 
}

export default InputText;