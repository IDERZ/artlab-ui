import React from "react";
import {TextField} from "../core/TextField";
import {Button} from "../core/Button";

function TextFieldSample (){
    return (
        <div>
            <h2>TextField</h2>
            <div style={{padding:5, overflow:"hidden"}}>
                <div style={{float:"left"}}>
                    <TextField style={{float:"left"}} placeholder="Standard field"/>
                    <Button text="Search"/>
                </div>
                <div style={{float:"left"}}>
                    <TextField size="medium" placeholder="Medium field. validation success" validation="success"  style={{float:"left"}}/>
                    <Button size="medium" icon="fa fa-search"/>
                </div>
                <div style={{float:"left"}}>
                    <TextField size="large" placeholder="Large field. validation error" validation="error" style={{float:"left"}}/>
                    <Button size="large" icon="fa fa-search"/>
                </div>
                <div style={{float:"left"}}>
                    <TextField size="large" placeholder="Disabled Large field." disabled style={{float:"left"}}/>
                    <Button size="large" icon="fa fa-search" text="Click"/>
                </div>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <TextField placeholder="Text field with Icon" style={{float:"left"}}
                           icon="fa fa-user"/>
                <TextField placeholder="Text field with Icon" style={{float:"left"}}
                           size="medium" icon="fa fa-user"/>
                <TextField placeholder="Text field with Icon" style={{float:"left"}}
                           size="large" icon="fa fa-user"/>
                <TextField placeholder="Disabled Text with Icon" style={{float:"left"}}
                           size="large" icon="fa fa-user" disabled/>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <TextField size="medium" placeholder="Set width. 400px" style={{width:400}} icon="fa fa-key"/>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
            <TextField size="medium" placeholder="Set stretch width" stretch icon="fa fa-coffee"/>
            </div>
        </div>
    );
}

export default TextFieldSample;