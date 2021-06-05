import React from "react";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default App;
