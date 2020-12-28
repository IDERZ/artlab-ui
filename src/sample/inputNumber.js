import React from "react";
import {InputNumber} from "../core/Input/Number";

function InputNumberSample (){

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
        <div style={{padding:5, overflow:"hidden"}}>
            <h2>InputNumber</h2>
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

export default InputNumberSample;