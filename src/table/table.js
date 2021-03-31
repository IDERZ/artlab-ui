import React from "react";
import PropTypes from "prop-types";
import css from "./style.module.scss";

const Table = props => {

    const getKeys = function(){
        return Object.keys(props.data[0]);
    }

    const getHeader = function(){
        var keys = getKeys();
        return keys.map((key, index) => {
        return <th width={120} key={key}>{key}</th>
        })
    }

    const getFilter = function() {

    }

    const RenderRow = (props) => {
        return props.keys.map((key, index) => {
            return <td width={120} key={props.data[key]}>{props.data[key]}</td>
        })
    }

    const getRowsData = function(){
        var items = props.data;
        var keys = getKeys();
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }

    return (
        <div className={css.tableWrapper} style={{height:props.height}}>
            <table cellSpacing="1">
                <thead>
                    {/* <tr>
                        {getFilter()}
                    </tr> */}
                    <tr>
                        {getHeader()}
                    </tr>
                </thead>
                <tbody>
                    {getRowsData()}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    );
}

Table.propTypes = {

};

Table.defaultProps = {

};

export default Table;
