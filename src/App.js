import React, {useState} from "react";

import ButtonSample from "./sample/button";
import InputTextSample from "./sample/inputText";
import InputNumberSample from "./sample/inputNumber";

function App() {

  return (
    <div style={{padding: 10, display:'block'}}>
      <h1>Artlab-UI components</h1>

      <ButtonSample />
      <InputTextSample />
      <InputNumberSample />
    </div>    
  );
}

// function TestForm () {
//     const [fname, setFname] = useState("");
//     const [lname, setLname] = useState("");
//     const [cname, setCname] = useState("");

//     const valueChanged = (e) => {
//       // console.log('type : ' + type);
//       console.log('val : ' + e.target.value);
//         // if (type == 'fname') {
//         //   setFname(event.target.value);
//         // }
//     };

//     const buttonClicked = () => {

//     };

//     return (
//       <div>
//         <h3>TestForm</h3>
//         <div className="alInputTexts">
          
//           <div>fname: {fname}, lname: {lname}, cname: {cname}</div>
//         </div>
//       </div>
//     );
// }

export default App;
