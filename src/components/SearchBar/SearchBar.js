import React from "react";
import { useState } from "react";


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="input-group">
      <div className="form-outline">
        <input type="search" id="form1" placeholder="Search" className="form-control" />
      </div>
    </div>
  );
}

export default SearchBar;