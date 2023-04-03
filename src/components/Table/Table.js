import React from "react";
import "./Table.css";

const Table = ({ tableData, handleInputChange }) => {
    return (
        <table style={{ borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th className="yellow-bg">Table Name</th>
                    <th className="yellow-bg">Column Name</th>
                    <th className="green-bg">Distinct Value</th>
                    <th className="orange-bg">User Input</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.tableName}</td>
                        <td>{data.uniqueColumn}</td>
                        <td>{data.columnName}</td>
                        <td>
                            <input
                                type="text"
                                name="editedColumnName"
                                value={data.editedColumnName}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;