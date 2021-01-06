import React from "react";
import PropTypes from "prop-types";

import css from "./style.module.scss";

const ButtonGroup = (props) => {
    const className = {
        justified : props.justified ? (' ' + css['justified']) : '',
    }

    return (
        <div className={`${css.buttonGroup}${className.justified}`}>
            {props.children}
        </div>
    );
}

ButtonGroup.propTypes = {
    justified : PropTypes.bool
};

ButtonGroup.defaultProps = {
    justified : false
};

export default ButtonGroup;