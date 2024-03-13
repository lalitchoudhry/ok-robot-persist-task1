import React from 'react'

const PrimaryBtn = ({title, handleClick}) => {
  return (
    <a className=' bg-brand rounded shadow-lg text-center text-lg py-2 px-5 m-2 text-white' href={handleClick}>{title}</a>
  )
}

export default PrimaryBtn;