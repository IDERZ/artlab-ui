import React from "react";
import {InputText} from "../core/Input/Text";
import {Button} from "../core/Button";


function InputTextSample (){
    return (
        <div>
            <h2>InputText</h2>
            <div style={{padding:5, overflow:"hidden"}}>
                <div style={{float:"left"}}>
                    <InputText style={{float:"left"}} placeholder="Standard field"/>
                    <Button text="Search"/>
                </div>
                <div style={{float:"left"}}>
                    <InputText size="medium" placeholder="Medium field. validation success" validation="success"  style={{float:"left"}}/>
                    <Button size="medium" icon="fa fa-search"/>
                </div>
                <div style={{float:"left"}}>
                    <InputText size="large" placeholder="Large field. validation error" validation="error" style={{float:"left"}}/>
                    <Button size="large" icon="fa fa-search"/>
                </div>
                <div style={{float:"left"}}>
                    <InputText size="large" placeholder="Disabled Large field." disabled style={{float:"left"}}/>
                    <Button size="large" icon="fa fa-search" text="Click"/>
                </div>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputText placeholder="Text field with Icon" style={{float:"left"}}
                           icon="fa fa-user"/>
                <InputText placeholder="Text field with Icon" style={{float:"left"}}
                           size="medium" icon="fa fa-user"/>
                <InputText placeholder="Text field with Icon" style={{float:"left"}}
                           size="large" icon="fa fa-user"/>
                <InputText placeholder="Disabled Text with Icon" style={{float:"left"}}
                           size="large" icon="fa fa-user" disabled/>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputText size="medium" placeholder="Set width. 300px" style={{width:300}} icon="fa fa-coffee"/>
            </div>
        </div>
    );
}

export default InputTextSample;