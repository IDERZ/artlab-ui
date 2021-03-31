import React from "react";
import {Table} from "./index";
import datas from "../testdata/data.json";

const SampleTable = () => {
    return (
        <div>
            <h2>Table</h2>
            <Table data={datas}/>
        </div>
    );
}

export default SampleTable;