import React from "react";
import { useState } from "react";
import EmployeeTable from "../EmployeeTable/EmployeeTable";



const SearchBar = (props) => {

  const handleChange = (e) => {
    props.handleSearch(e.target.value)
  }

  return (
    <div style={{width: "80%", margin: "50px 55vw 50px 45vw" }} className="input-group">
      <div className="form-outline">
        <input type="search"  id="form1" onChange={handleChange} placeholder="Search" className="form-control" />
      </div>
    </div>
  );
}

export default SearchBar;