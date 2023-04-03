import React, { useState } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import './App.css';

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
    if (tableName && uniqueColumn && columnName) {
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
    }

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
    <div className="container">
      {showForm ? (
        <Form handleSubmit={handleSubmit}
          tableName={tableName}
          uniqueColumn={uniqueColumn}
          columnName={columnName}
          setTableName={setTableName}
          setUniqueColumn={setUniqueColumn}
          setColumnName={setColumnName} />
      ) : (
        <div className="table-container">
          <Table tableData={tableData} handleInputChange={handleInputChange} />
          <div className="table-button-container">
            <button onClick={handleUpdate}>Update</button>
            <button className="green-bg" onClick={() => setShowForm(true)}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
