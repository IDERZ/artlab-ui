import React from "react";
import PropTypes from "prop-types";

import css from "./style.module.scss";

const Button = (props) => {

    const className = {
        color : props.color ? (' ' + css[props.color]) : '',
        size  : props.size  ? (' ' + css[props.size])  : '',
        type  : props.type  ? (' ' + css[props.type])  : ''
    }

    return (
        <button 
            className={`${css.button}${className.color}${className.size}${className.type}`} 
            disabled={props.disabled}
            onClick={props.clicked}
            style={{marginTop:props.marginTop,
                    marginRight:props.marginRight,
                    marginBottom:props.marginBottom,
                    marginLeft:props.marginLeft}}
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    color        : PropTypes.oneOf(['gray', 'blue', 'red', 'green', 'orange', 'yellow']),
    size         : PropTypes.oneOf(['small', 'medium', 'large']),
    type         : PropTypes.oneOf(['fill', 'outline']),
    disabled     : PropTypes.bool,
    onClick      : PropTypes.func,
    marginTop    : PropTypes.number,
    marginRight  : PropTypes.number,
    marginBottom : PropTypes.number,
    marginLeft   : PropTypes.number
};

Button.defaultProps = {
    color    : "gray",
    size     : "small",
    type     : "fill",
    disabled : false
};

export default Button;