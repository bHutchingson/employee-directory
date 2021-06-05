import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const EmployeeTable = () => {
  const [employeeState, setEmployeeState] = useState('');

  useEffect (() => {
    loadEmployees();
  }, []);


  const loadEmployees = () => {
    API.getEmployee()
      .then((res) => {
        const employees = res.data.results;
        setEmployeeState(employees);
        console.log(employees);
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <table class="table">
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

          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>420-420-6969</td>
            <td>@mdo</td>
            <td>69-69-6969</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>420-420-6969</td>
            <td>@fat</td>
            <td>69-69-6969</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>420-420-6969</td>
            <td>@twitter</td>
            <td>69-69-6969</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable



