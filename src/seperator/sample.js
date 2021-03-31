import React from "react";
import Seperator from "./index";

const SampleSeperator = () => {
    return (
        <div style={{width:350, overflow:'hidden'}}>
            <h2>Seperator</h2>
            <Seperator/>
            <Seperator>Text here</Seperator>
        </div>
    );
}

export default SampleSeperator;