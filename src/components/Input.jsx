import React from 'react'

function Input({label,placeholder,handleChange}) {
  return (
    <div className='my-6 text-md'>
        <h1>{label}</h1>
        <input onChange={(e)=>handleChange(e)} className='rounded-full shadow-lg w-full mt-2 px-4 py-2 border' name={label} type='text' placeholder={placeholder}></input>
    </div>
  )
}

export default Input