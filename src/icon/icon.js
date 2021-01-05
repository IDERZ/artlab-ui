import React from "react";
import PropTypes from "prop-types";

const Icon = props => {
    return (
        <i className={props.icon} 
           style={{color:props.color,
                   marginTop:props.marginTop,
                   marginRight:props.marginRight,
                   marginBottom:props.marginBottom,
                   marginLeft:props.marginLeft }}></i>
    );
}

Icon.propTypes = {
    icon         : PropTypes.string.isRequired,
    color        : PropTypes.string,
    marginTop    : PropTypes.number,
    marginRight  : PropTypes.number,
    marginBottom : PropTypes.number,
    marginLeft   : PropTypes.number
}

export default Icon;