import React from "react";

import SampleIcon from "./icon/sample";
import SampleSeperator from "./seperator/sample";
import SampleButton from "./button/sample";
import SampleInput from "./input/sample";

function App () {

  return (
    <div style={{padding: 10, display:'block'}}>
      <h1>Artlab-UI components</h1>

      <SampleIcon/>
      <SampleSeperator/>
      <SampleButton />
      <SampleInput />

    </div>    
  );
}


export default App;
