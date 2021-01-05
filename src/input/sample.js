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
                    <InputText style={{float:"left"}} placeholder="Standard field"/>
                    <Button>Search</Button>
                </div>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="medium" placeholder="Medium field. validation success" validation="success"  style={{float:"left"}}/>
                    <IconButton size="medium" icon="fa fa-search"/>
                </div>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="large" placeholder="Large field. validation error" validation="error" style={{float:"left"}}/>
                    <IconButton size="large" icon="fa fa-sms"/>
                </div>
                <div style={{float:"left", display:"inline-flex"}}>
                    <InputText size="large" placeholder="Disabled Large field." disabled style={{float:"left"}}/>
                    <IconButton size="large" icon="fa fa-sms" text="Click"/>
                </div>
            </div>
            <div style={{padding:5, overflow:"hidden", display:"inline-flex"}}>
                <InputText placeholder="Text field with Icon"
                           prepend={<Icon icon="fa fa-user"/>}/>
                <InputText placeholder="Text field with Icon"
                           size="medium" prepend={<Icon icon="fa fa-user"/>}/>
                <InputText placeholder="Text field with Icon"
                           size="large" prepend={<Icon icon="fa fa-user"/>}/>
                <InputText placeholder="Disabled Text with Icon"
                           size="large" prepend={<Icon icon="fa fa-coffee"/>} disabled/>
            </div>
            <div style={{padding:5, overflow:"hidden"}}>
                <InputText size="medium" placeholder="Set width. 300px" style={{width:300}} icon="fa fa-coffee"/>
            </div>

            <h4>InputNumber</h4>
            <div className="example">
                <div style={{overflow:"hidden", display:"block", marginBottom:5}}>
                    <label style={{float:"left", paddingRight:5, paddingTop:2, fontSize:13, color:"gray"}}> Read only number field: </label>
                    <InputNumber value={123566} thousandSeparator="," decimalSeparator="." prefix={'₮'} 
                                decimalScale="2" readOnly style={{float:"left"}}/>
                </div>
                <div style={{overflow:"hidden", display:"block", marginBottom:5}}>
                    <InputNumber placeholder="Standart number field" style={{float:"left"}}/>
                    <InputNumber value={150000} thousandSeparator="," decimalSeparator="." prefix={'₮'} 
                                decimalScale="2" disabled textAlign="right" style={{float:"left", width:300}}/>
                </div>
                <div style={{overflow:"hidden", display:"block", marginBottom:5}}>
                    <InputNumber thousandSeparator="," decimalSeparator="." inputMode="numeric" decimalScale="2" 
                                 icon="fa fa-dollar-sign" textAlign="right" value="0" style={{float:"left"}}/>
                    <InputNumber format="#### #### #### ####" placeholder="Master card number format field" style={{float:"left", width:300}}/>
                </div>
                <div style={{overflow:"hidden", display:"block", marginBottom:5}}>
                    <InputNumber format={cardExpiry} placeholder="Format credit card expiry time" style={{float:"left"}}/>
                    <InputNumber format="+976 ####-####" mask="_" allowEmptyFormatting placeholder="Phone number format and mask (show)"/>
                </div>
            </div>
        </div>
    );
}

export default SampleInput;