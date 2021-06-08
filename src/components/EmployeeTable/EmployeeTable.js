import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import SearchBar from "../SearchBar/SearchBar";


const EmployeeTable = (props) => { 
  const [employeeState, setEmployeeState] = useState([]);

  useEffect (() => {
    loadEmployees();
  }, []);


  const loadEmployees = () => {
    API.getEmployee()
      .then((res) => {
        const allEmployees = res.data.results;
        console.log("all employees employeeTable", allEmployees)
        setEmployeeState(allEmployees);
      })
      .catch(err => console.error(err));
  }
  return (
    <div>
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
          <EmployeeInfo employeeState={employeeState}/>
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable



