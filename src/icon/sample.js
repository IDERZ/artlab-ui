import React from "react";
import {Icon} from "./index";

const SampleIcon = () => {
    return (
        <div>
            <h2>Icon</h2>
            <Icon icon="fa fa-home fa-xs"/>
            <Icon icon="fa fa-home fa-sm" marginLeft={10}/>
            <Icon icon="fa fa-home" marginRight={10}/>
            <Icon icon="fa fa-home fa-lg" marginTop={5}/>
            <Icon icon="fa fa-home fa-2x" marginBottom={5}/>
            <Icon icon="fa fa-home fa-3x"/>
            <Icon icon="fa fa-home fa-4x"/>
        </div>
    );
}

export default SampleIcon;