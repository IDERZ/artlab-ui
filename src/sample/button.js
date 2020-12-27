import React from "react";
import { Button } from "../core/Button";

function SampleButton() {
    return (
        <div>
            <h2>Button</h2>
            <div style={{padding:5}}>
                <Button text="Default"/>
                <Button text="Blue"  color="blue"/>
                <Button text="Red" color="red"/>
                <Button text="Green" color="green"/>
                <Button text="Orange" color="orange"/>
                <Button text="Yellow" color="yellow"/>
                <Button text="Disabled" disabled/>
            </div>
            <div style={{padding:5}}>
                <Button text="Default" icon="fa fa-home"/>
                <Button text="Blue"  color="blue" icon="fa fa-home"/>
                <Button text="Red" color="red" icon="fa fa-home"/>
                <Button text="Green" color="green" icon="fa fa-home"/>
                <Button text="Orange" color="orange" icon="fa fa-home"/>
                <Button text="Yellow" color="yellow" icon="fa fa-home"/>
                <Button text="Disabled" disabled icon="fa fa-home"/>
            </div>
            <div style={{padding:5}}>
                <Button text="Default outline" type="outline"/>
                <Button text="Blue outline"  color="blue" type="outline"/>
                <Button text="Red outline" color="red" type="outline"/>
                <Button text="Green outline" color="green" type="outline"/>
                <Button text="Orange outline" color="orange" type="outline"/>
                <Button text="Yellow outline" color="yellow" type="outline"/>
                <Button text="Disabled outline" disabled type="outline"/>
            </div>
            <div style={{padding:5}}>
                <Button text="Default medium" size="medium"/>
                <Button text="Blue medium"  size="medium" color="blue" />
                <Button text="Red medium" size="medium" color="red"/>
                <Button text="Green medium" size="medium" color="green"/>
                <Button text="Orange medium" size="medium" color="orange"/>
                <Button text="Yellow medium" size="medium" color="yellow"/>
                <Button text="Disabled medium" size="medium" disabled/>
            </div>
            <div style={{padding:5}}>
                <Button text="Default large" size="large"/>
                <Button text="Blue large"  size="large" color="blue" />
                <Button text="Red large" size="large" color="red"/>
                <Button text="Green large" size="large" color="green"/>
                <Button text="Orange large" size="large" color="orange"/>
                <Button text="Yellow large" size="large" color="yellow"/>
                <Button text="Disabled large" size="large" disabled />
            </div>
            <div style={{padding:5}}>
                <Button type="round" icon="fa fa-home"/>
                <Button size="medium" type="round" icon="fa fa-home"/>
                <Button size="large" type="round" icon="fa fa-home fa-lg"/>

                <Button icon="fa fa-home"/>
                <Button size="medium" icon="fa fa-home"/>
                <Button size="large" icon="fa fa-home fa-lg"/>
            </div>
        </div>
    );
}

export default SampleButton;