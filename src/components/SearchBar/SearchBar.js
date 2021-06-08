import React from "react";
import { useState } from "react";
import EmployeeTable from "../EmployeeTable/EmployeeTable";


const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    console.log(searchValue)
  }
  

  /* const filteredEmployees = employees.filter((employee) => {
    return employee.included(searchValue)
  }) */


  return (
    <div className="input-group">
      <div className="form-outline">
        <input type="search" value={searchValue} id="form1" onChange={handleChange} placeholder="Search" className="form-control" />
      </div>
    </div>
  );
}

export default SearchBar;