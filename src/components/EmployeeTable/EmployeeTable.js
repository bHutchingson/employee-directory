import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import SearchBar from "../SearchBar/SearchBar";


const EmployeeTable = (props) => { 
  const [employeeState, setEmployeeState] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  console.log(props.searchValue);
  useEffect (() => {
    loadEmployees();
  }, []);

  /* useEffect (() => {
    filterSearch();
  }, [searchValue]); */

  const loadEmployees = () => {
    API.getEmployee()
      .then((res) => {
        setEmployeeState(res.data.results)
        /* const employeeSearch = res.data.results.filter((employee) => {
          return employee.includes(props.searchValue);
        }) */
        /* const allEmployees = res.data.results;
        console.log("all employees employeeTable", allEmployees)
        setEmployeeState(allEmployees); */
      })
      /* .then((res) => {
        allEmployees.filter((employee) => {
          return employee.includes(props.searchValue);
        })
      }) */
      .catch(err => console.error(err));
  }
  console.log(employeeState)
  const filterSearch = () => {
    const newSearch = employeeState;
    console.log(newSearch)
    setEmployeeState(newSearch.filter((employee) => {
      const newEmployee = Object.values(employee.name);
      console.log(newEmployee)
      return newEmployee.includes(props.searchValue);
    }))
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  
  
  /* const filteredEmployees = employeeState.filter((employee) => {
    console.log(employee)
    return employee.includes(props.searchValue)
  }) */

  return (
    <div>
      <div className="input-group">
        <div className="form-outline">
          <input type="search" value={searchValue} id="form1" onChange={handleChange} placeholder="Search" className="form-control" />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeInfo employeeState={employeeState} />
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable



