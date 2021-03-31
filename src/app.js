import React from "react";

import SampleSeperator from "./seperator/sample";
import SampleIcon from "./icon/sample";
import SampleImage from "./image/sample";
import SampleLink from "./link/sample";
import SampleButton from "./button/sample";
import SampleInput from "./input/sample";
import SampleTable from "./table/sample";

function App () {

  return (
    <div style={{padding: 10, display:'block'}}>
      <h1>Artlab-UI components</h1>

      <SampleSeperator/>
      <SampleIcon/>
      <SampleImage/>
      <SampleLink/>
      <SampleButton/>
      <SampleInput/>
      <SampleTable/>

    </div>    
  );
}


export default App;
