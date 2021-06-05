import React from "react";

function Header() {
    return (
      <div className="p-5 text-center bg-dark">
        <h1 className="mb-3 text-light">Employee Directory</h1>
        <h4 className="mb-3 text-light">Click on carrots to filter by heading or use the search box to narrow your results</h4>
      </div>
    );
}

export default Header;