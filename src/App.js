import React, { useState } from "react";

function App() {
  const [tableData, setTableData] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [tableName, setTableName] = useState("");
  const [uniqueColumn, setUniqueColumn] = useState("");
  const [columnName, setColumnName] = useState("");

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    setTableData((prevState) => {
      const newData = [...prevState];
      newData[index][name] = value;
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevState) => [
      ...prevState,
      {
        tableName,
        uniqueColumn,
        columnName,
        editedColumnName: "",
      },
    ]);
    setShowForm(false);
    setTableName("");
    setUniqueColumn("");
    setColumnName("");
  };

  const handleUpdate = () => {
    setTableData((prevState) => {
      const newData = prevState.map((data) => {
        return { ...data, columnName: data.editedColumnName };
      });
      return newData;
    });
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Table Name:
            <input
              type="text"
              name="tableName"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Unique Column:
            <input
              type="text"
              name="uniqueColumn"
              value={uniqueColumn}
              onChange={(e) => setUniqueColumn(e.target.value)}
            />
          </label>
          <br />
          <label>
            Column Name:
            <input
              type="text"
              name="columnName"
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Table Name</th>
                <th>Unique Column</th>
                <th>Column Name</th>
                <th>Edited Column Name</th>
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
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setShowForm(true)}>Add</button>
        </div>
      )}
    </div>
  );
}

export default App;
