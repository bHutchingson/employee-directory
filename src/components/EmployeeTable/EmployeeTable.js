import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import SearchBar from "../SearchBar/SearchBar";


const EmployeeTable = () => {
  const [employeeState, setEmployeeState] = useState([]);
  const [filteredState, setFilteredState] = useState([]);
  

  //get users from api on page load
  useEffect(() => {
    loadEmployees();
  }, []);

  //handle input change in searchbar
  const handleSearch = (term) => {
    setFilteredState(employeeState.filter((employee) => {
      return employee.name.first.toLowerCase().includes(term.toLowerCase())
    }))
  }


  //initialize let
  let allEmployees;

  //load employees from user api
  const loadEmployees = () => {
    API.getEmployee()
      .then((res) => {
        allEmployees = res.data.results;
        setFilteredState(allEmployees);
        setEmployeeState(allEmployees)
        console.log(allEmployees)
      })
      .catch(err => console.error(err));
  }

  /* const employeeNames = employeeState.map((employee) => {
    return employee.name.first;
  })

  console.log(employeeNames)

  console.log(employeeState)
  
  const filteredEmployees = employeeState.filter((employee) => {
    return employee.name.first.includes(searchValue)
  })
  

  setEmployeeState(filteredEmployees); */

  return (
    <div>
      <SearchBar handleSearch={handleSearch}/>
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
          <EmployeeInfo employeeState={filteredState} />
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable



