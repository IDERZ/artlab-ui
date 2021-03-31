import React from "react";
import {Image} from "./index";

const SampleImage = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <h2>Image</h2>
            <div style={{float:'left', width:200, height:150, marginRight:10}}>
                <Image src="https://cdn.artlab.mn/rsc/idr/photos/burger.jpg" alt="Burger"/>
            </div>
            <div style={{float:'left', width:200, height:150}}>
                <Image src="https://cdn.artlab.mn/rsc/idr/photos/alfredo.jpg" alt="Alfredo" circle width={100} height={100}/>
            </div>
        </div>
    );
}

export default SampleImage;