import React from "react";
import css from "./style.module.scss";
import PropTypes from "prop-types";

const Image = props => {
    const className = {
        circle : props.circle ? (' ' + css['circle']) : ''
    }

    return (
        <img className={`${css.img}${className.circle}`} src={props.src} alt={props.alt} width={props.width} height={props.height}/>
    );
};

Image.propTypes = {
    src          : PropTypes.string.isRequired,
    width        : PropTypes.number,
    height       : PropTypes.number,
    circle       : PropTypes.bool,
    marginTop    : PropTypes.number,
    marginRight  : PropTypes.number,
    marginBottom : PropTypes.number,
    marginLeft   : PropTypes.number
};

Image.defaultProps = {
    // width    : 100,
    // height   : 100
};

export default Image;