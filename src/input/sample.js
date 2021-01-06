import React from "react";
import {InputText, InputNumber} from "../input";
import {Button, IconButton} from "../button";
import {Icon} from "../icon";


function SampleInput (){

    const cardExpiry = (val) => {
        let month = limit(val.substring(0, 2), '12');
        let date = limit(val.substring(2, 4), '31');
    
        return month + (date.length ? '/' + date : '');
    }
    
    const limit = (val, max) => {
        if (val.length === 1 && val[0] > max[0]) {
          val = '0' + val;
        }
      
        if (val.length === 2) {
          if (Number(val) === 0) {
            val = '01';
      
          //this can happen when user paste number
        } else if (val > max) {
            val = max;
          }
        }
      
        return val;
    }

    return (
        <div>
            <h2>Input</h2>
            <h4>InputText</h4>
            <div style={{padding:5, overflow:"hidden"}}>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText placeholder="Standard field"/>
                    <Button>Search</Button>
                </div>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText placeholder="Standard field"/>
                    <IconButton icon="fa fa-search"/>
                </div>

                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="medium" placeholder="Medium field. validation success"/>
                    <Button size="medium">Search</Button>
                </div>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="medium" placeholder="Medium field. validation success"/>
                    <IconButton size="medium" icon="fa fa-search"/>
                </div>

                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="large" placeholder="Large field. validation error"/>
                    <Button size="large">Sms</Button>
                </div>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="large" placeholder="Large field. validation error"/>
                    <IconButton size="large" icon="fa fa-sms"/>
                </div>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="large" placeholder="Disabled Large field." disabled />
                    <IconButton size="large" icon="fa fa-sms" text="Click"/>
                </div>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputText placeholder="Standard. Icon prepend"
                           prepend={<Icon icon="fa fa-user"/>}/>
                <InputText placeholder="Medium. Icon prepend"
                           size="medium" prepend={<Icon icon="fa fa-user"/>}/>
                <InputText placeholder="Large. Icon prepend"
                           size="large" prepend={<Icon icon="fa fa-user"/>}/>
                <InputText placeholder="Disabled large. Icon prepend"
                           size="large" prepend={<Icon icon="fa fa-user"/>} disabled/>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputText placeholder="Standard. Text append"
                           append="@mail.mn"/>
                <InputText placeholder="Text field with Icon append"
                           size="medium" append="@mail.mn"/>
                <InputText placeholder="Text field with Icon append"
                           size="large" append="@mail.mn"/>
                <InputText placeholder="Disabled Text with Icon append"
                           size="large" append="@mail.mn" disabled/>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputText size="medium" placeholder="Set width. 400px" width={400} 
                           prepend="@" append=".mn" value="Hi artlab."/>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputText size="medium" placeholder="Set width. stretched" stretched
                           prepend={<Icon icon="fa fa-star"/>} append="Text"/>
            </div>

            <h4>InputNumber</h4>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputNumber placeholder="Standart number field"/>
                <InputNumber value="150000" thousandSeparator="," decimalSeparator="." 
                             decimalScale="2" disabled/>
                <InputNumber format="#### #### #### ####" placeholder="Master card number format field" textAlign="center"/>
                <InputNumber format={cardExpiry} placeholder="Format credit card expiry time"/>
                <InputNumber format="+976 ####-####" mask="_" textAlign="left"/>
                <InputNumber thousandSeparator="," decimalSeparator="." decimalScale="2" 
                             append={<Icon icon="fa fa-dollar-sign"/>} textAlign="right" value={0}/>
            </div>
        </div>
    );
}

export default SampleInput;