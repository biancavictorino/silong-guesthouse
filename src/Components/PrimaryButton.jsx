import React from 'react'

function PrimaryButton( {btnText, styles}) {
  return (
    <button className={`bg-transparent text-primary-color border-2 border-primary-color rounded-lg px-3 py-1 hover:scale-95 hover:bg-primary-color hover:text-secondary-color transition ease-in-out ${styles}`}>
        {btnText}
    </button>
  )
}

export default PrimaryButton
