import React from "react";
import { useState } from "react";


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div class="input-group">
      <div class="form-outline">
        <input type="search" id="form1" placeholder="Search" class="form-control" />
      </div>
    </div>
  );
}

export default SearchBar;