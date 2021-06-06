import React from "react";


const EmployeeInfo = (props) => {
  const employees = props.employeeState;
  console.log("EmployeeInfo employees", employees)
  return (
      employees.map((employee) =>
        <tr key={employee.id.value}>
          <th scope="row"><img alt={employee.name.first} src={employee.picture.thumbnail}></img></th>
          <td>{employee.name.first} {employee.name.last}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{employee.dob.date}</td>
        </tr>

      )

  )
  /* return(
    employees.map((employee) => {
      return(
        <tr key={employee.name}>
          <th scope="row"><image src='{employee.picture.thumbnail}'></image></th>
          <td>{employee.name}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{employee.dob}</td>
        </tr>
      )
    })
  ) */
  /* if (props.length > 0) {
    return(
      props.map((employee) => {
        return(
          <tr key={employee.name}>
            <th scope="row"><image src='{employee.picture.thumbnail}'></image></th>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob}</td>
          </tr>
        )
      })
    )
  } else {
    return(<h1>Loading</h1>);
  } */

}

export default EmployeeInfo
