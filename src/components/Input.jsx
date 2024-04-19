import React from 'react'

const Input = ({name, placeholder, type, value, handleChange}) => {
  return (
    <div className='m-5'>
        <input type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} required className='bg-[#EEF5FF] px-5 py-3 text-lg rounded-lg w-full outline-brand' />
    </div>
  )
}

export default Input;