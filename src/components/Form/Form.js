import React from "react";
import "./Form.css";

const Form = (props) => {
    const { handleSubmit, tableName, setTableName, uniqueColumn, setUniqueColumn, columnName, setColumnName } = props;
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                type="text"
                name="tableName"
                placeholder="Table Name"
                value={tableName}
                onChange={(e) => setTableName(e.target.value)}
            />
            <br />
            <input
                type="text"
                name="uniqueColumn"
                placeholder="Unique Column"
                value={uniqueColumn}
                onChange={(e) => setUniqueColumn(e.target.value)}
            />
            <br />
            <input
                type="text"
                name="columnName"
                placeholder="Column Name"
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
            />
            <br />
            <button type="submit">Manual Update</button>
        </form>
    )
}
export default Form;