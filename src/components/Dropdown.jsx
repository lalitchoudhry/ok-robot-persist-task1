// all the react imports
import React, { useState } from 'react';

function Dropdown({label, item}) {

  // all states and variables
  const [showDropdown, setShowDropdown] = useState(false);

  // functions
  const handleSubmit = () => {
    console.log("submit filter")
  }

  return (
    <div className="" onClick={() => setShowDropdown(!showDropdown)}>
      <div className="text-white border-2 border-gray-dark py-2 px-5">
        <p>Filter</p>
      </div>
      {showDropdown && <div className="">
        {(item).map((item) => <div
          className=""
          onClick={()=>{
            handleSubmit(item.value)}}
        >{item.label}</div>
        )}
      </div>}
    </div>
  )
}

export default Dropdown;