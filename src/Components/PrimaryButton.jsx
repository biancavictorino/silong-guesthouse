import React from 'react'

function PrimaryButton( {btnText, styles}) {
  return (
    <button className={`bg-transparent text-primary-color border-2 border-primary-color rounded-lg px-3 py-1 ${styles}`}>
        {btnText}
    </button>
  )
}

export default PrimaryButton
