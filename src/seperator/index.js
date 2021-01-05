import React from "react";
import css from "./style.module.scss";

const Seperator = props => {

    return (
        <div className={`${css.seperator}${props.children ? (' ' + css.hasText) : ''}`}>
            <span>{props.children}</span>  
        </div>
    );
}

export default Seperator;