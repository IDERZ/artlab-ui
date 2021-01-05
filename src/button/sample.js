import React from "react";
import {Icon} from "../icon";
import {Button, IconButton, ButtonGroup} from "./index";

const SampleButton = (props) => {
    return (
        <div>
            <h2>Button</h2>
            <h4>Button</h4>
            <div style={{padding:5}}>
                <Button>Default</Button>
                <Button color="blue">Blue</Button>
                <Button color="red">Red</Button>
                <Button color="green">Green</Button>
                <Button color="orange">Orange</Button>
                <Button color="yellow">Yellow</Button>
                <Button disabled>Disabled</Button>
            </div>
            <div style={{padding:5}}>
                <Button><Icon icon="fa fa-home" marginRight={5} marginLeft={-2}/>Default</Button>
                <Button color="blue">   <Icon icon="fa fa-home" marginRight={5} marginLeft={-2}/>Blue</Button>
                <Button color="red">    <Icon icon="fa fa-home" marginRight={5} marginLeft={-2}/>Red</Button>
                <Button color="green">  <Icon icon="fa fa-home" marginRight={5} marginLeft={-2}/>Green</Button>
                <Button color="orange"> <Icon icon="fa fa-home" marginRight={5} marginLeft={-2}/>Orange</Button>
                <Button color="yellow"> <Icon icon="fa fa-home" marginRight={5} marginLeft={-2}/>Yellow</Button>
                <Button disabled>       <Icon icon="fa fa-home" marginRight={5} marginLeft={-2}/>Disabled</Button>
            </div>
            <div style={{padding:5}}>
                <Button type="outline">Default outline</Button>
                <Button color="blue"   type="outline">Blue outline</Button>
                <Button color="red"    type="outline">Red outline</Button>
                <Button color="green"  type="outline">Green outline</Button>
                <Button color="orange" type="outline">Orange outline</Button>
                <Button color="yellow" type="outline">Yellow outline</Button>
                <Button disabled type="outline">Disabled outline</Button>
            </div>
            <div style={{padding:5}}>
                <Button size="medium">Default medium</Button>
                <Button size="medium" color="blue" >Blue medium</Button>
                <Button size="medium" color="red">Red medium</Button>
                <Button size="medium" color="green">Green medium</Button>
                <Button size="medium" color="orange">Orange medium</Button>
                <Button size="medium" color="yellow">Yellow medium</Button>
                <Button size="medium" disabled>Disabled medium</Button>
            </div>
            <div style={{padding:5}}>
                <Button size="large">Default large</Button>
                <Button size="large" color="blue" >Blue large</Button>
                <Button size="large" color="red">Red large</Button>
                <Button size="large" color="green">Green large</Button>
                <Button size="large" color="orange">Orange large</Button>
                <Button size="large" color="yellow">Yellow large</Button>
                <Button size="large" disabled >Disabled large</Button>
            </div>

            <h4>IconButton</h4>
            <div style={{padding:5}}>
                <IconButton icon="fa fa-home" title="Home button"/>
                <IconButton icon="fa fa-home" size="medium" title="Home button"/>
                <IconButton icon="fa fa-home" size="large" title="Home button"/>
  
                <IconButton icon="fa fa-home" title="Home button" round />
                <IconButton icon="fa fa-home" size="medium" title="Home button" round/>
                <IconButton icon="fa fa-home" size="large"  title="Home button" round/>

                <IconButton icon="far  fa-bell" title="Home button" color="blue"/>
                <IconButton icon="far  fa-bell" size="medium" title="Home button" color="blue"/>
                <IconButton icon="far fa-bell" size="large" title="Home button"  color="blue"/>
  
                <IconButton icon="fab fa-facebook-square" title="Home button" round color="blue"/>
                <IconButton icon="fab fa-facebook-square" size="medium" title="Home button" round color="blue"/>
                <IconButton icon="fab fa-facebook-square" size="large"  title="Home button" round color="blue"/>
            </div>

            <h4>ButtonGroup</h4>
            <div style={{padding:5, display:"inline-flex"}}>
                <IconButton icon="fas fa-caret-left"/>
                <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </ButtonGroup>
                <IconButton icon="fas fa-caret-right"/>
            </div>
            <div style={{padding:5, display:"inline-flex"}}>
                <IconButton icon="fas fa-caret-left" color="green"/>
                <ButtonGroup>
                    <Button color="orange">1</Button>
                    <Button color="red">2</Button>
                    <Button color="yellow">3</Button>
                    <Button color="blue">4</Button>
                </ButtonGroup>
                <IconButton icon="fas fa-caret-right" disabled/>
            </div>
        </div>
    );
}

export default SampleButton;
  