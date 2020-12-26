import React, { useState } from "react";
import style from "./style.module.scss";

export const TextField = (props) => {

    const [value, setValue] = useState("");

    const changeValue = event => {
        setValue(event.target.value);
    };

    return (
        <div className={style.textField}>
            <input type="text" style={props.style}
                className={style.input}
                onChange={changeValue}
                placeholder={props.placeholder}
                disabled={props.disabled} />
        </div>
    );
}