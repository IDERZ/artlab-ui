import React from "react";
import css from "./style.module.scss";

import PropTypes from "prop-types";

const Link = props => {
    return (
        <a className={css.lnk} title={props.title} href={props.href} target={props.target}
            style={{marginTop:props.marginTop,
                    marginRight:props.marginRight,
                    marginBottom:props.marginBottom,
                    marginLeft:props.marginLeft,
                    fontSize:props.fontSize}} 
            onClick={props.clicked}>
            {props.children}
        </a>
    );
};

Link.propTypes = {
    href : PropTypes.string,
    marginTop    : PropTypes.number,
    marginRight  : PropTypes.number,
    marginBottom : PropTypes.number,
    marginLeft   : PropTypes.number,
    fontSize     : PropTypes.string
};

Link.defaultProps = {
    href      : '#'
};

export default Link;