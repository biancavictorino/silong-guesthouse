import React from 'react'

function Input ( {inputType, inputLabel } ) {
  return (
    <div>
        <p className=''>{inputLabel}</p>
        <input type={inputType} className='w-full rounded-md h-8 px-2 text-text-color focus:outline-none'/>
    </div>
  )
}

export default Input