import React from 'react'

function SecondaryButton( {btnText, styles}) {
  return (
    <button className={`bg-primary-color text-secondary-color border-2 border-primary-color rounded-lg px-3 py-1 ${styles}`}>
        {btnText}
    </button>
  )
}

export default SecondaryButton