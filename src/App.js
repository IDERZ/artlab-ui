import React from "react";

import {Button} from "./core/Button";
import {TextField} from "./core/TextField";

function App() {
  return (
    <div style={{padding: 10}}>
      <h1>Artlab-UI components</h1>

      <h3>Button</h3>
      <div className="alButtons">
        <Button text="Default button" />
        <Button text="Blue button"  color="blue" />
        <Button text="Red button" color="red"/>
        <Button text="Disabled button" disabled/>
      </div>

      <h3>TextField</h3>
      <div className="alInputTexts">
        <TextField style={{width : 200}}/>
        <TextField style={{width : 250}}/>
        <TextField style={{width : '100%'}} placeholder="Утгаа оруулна уу"/>
      </div>
    </div>
    
  );
}

export default App;
