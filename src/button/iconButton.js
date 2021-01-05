import React from "react";
import PropTypes from "prop-types";

import css from "./style.module.scss";

const IconButton = (props) => {

    const className = {
        color : props.color ? (' ' + css[props.color]) : '',
        size  : props.size  ? (' ' + css[props.size])  : '',
        round : props.round ? (' ' + css['round']) : '',
    }

    return (
        <button 
            className={`${css.iconButton}${className.color}${className.size}${className.round}`} 
            disabled={props.disabled}
            onClick={props.clicked}
            title = {props.title}
            style={{marginTop:props.marginTop,
                    marginRight:props.marginRight,
                    marginBottom:props.marginBottom,
                    marginLeft:props.marginLeft}}
        >
            <i className={props.icon}/>
        </button>
    );
}

IconButton.propTypes = {
    color    : PropTypes.oneOf(['gray', 'blue', 'red', 'green', 'orange', 'yellow']),
    size     : PropTypes.oneOf(['small', 'medium', 'large']),
    round    : PropTypes.bool,
    disabled : PropTypes.bool,
    title    : PropTypes.string,
    onClick  : PropTypes.func,
    marginTop    : PropTypes.number,
    marginRight  : PropTypes.number,
    marginBottom : PropTypes.number,
    marginLeft   : PropTypes.number
};

IconButton.defaultProps = {
    color    : "gray",
    size     : "small",
    round    : false,
    disabled : false,
    title    : ""
};

export default IconButton;