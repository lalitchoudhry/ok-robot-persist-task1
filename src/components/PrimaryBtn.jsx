import React from 'react'

const PrimaryBtn = ({title, handleClick, href}) => {
  return (
    <a className=' bg-brand rounded shadow-lg text-center text-md py-2 px-5 text-white hover:bg-hover cursor-pointer' href={href} onClick={handleClick}>{title}</a>
  )
}

export default PrimaryBtn;