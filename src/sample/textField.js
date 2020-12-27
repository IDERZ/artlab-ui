import React from "react";
import {TextField} from "../core/TextField";
import {Button} from "../core/Button";

function TextFieldSample (){
    return (
        <div>
            <h2>TextField</h2>
            <div style={{padding:5}}>
                <TextField placeholder="Placeholder"/>
                <Button text="Search"/>
            </div>
            <div style={{padding:5}}>
                <TextField size="medium"/>
                <Button text="Click me" size="medium"/>
            </div>
            <div style={{padding:5}}>
                <TextField size="large" width="200"/>
                <Button text="Click me" size="large"/>
            </div>
        </div>
    );
}

export default TextFieldSample;