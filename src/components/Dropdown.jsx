// all the react imports
import React, { useState } from 'react';

function Dropdown({label, item, updateFilter, title}) {

  // all states and variables
  const [showDropdown, setShowDropdown] = useState(false);

  // functions
  const handleSubmit = (value) => {
    console.log("submit filter")
    updateFilter({label, value})
  }

  return (
    <div className="relative" onClick={() => setShowDropdown(!showDropdown)}>
      <div className="flex justify-between items-center border-2 rounded text-brand border-brand py-2 px-5 hover:bg-brand hover:text-white cursor-pointer">
        <p>{title}</p>
        <i className="bi bi-caret-down ml-2"></i>
      </div>
      <ul className={`${showDropdown ? "flex" : "hidden"} absolute flex-col bg-white w-full z-10`}>
        {(item).map((item) => <div
          key={item.key}
          className=" p-2 text-sm cursor-pointer hover:bg-hover"
          onClick={()=>{
            handleSubmit(item)}}
        >{item.label}</div>
        )}
      </ul>
    </div>
  )
}

export default Dropdown;