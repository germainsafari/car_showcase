import React from 'react'
import Image from 'next/image'
function CustomButton() {
  return (
    <button
    disabled={false}
    type={button}
    className={`custom-btn`}
    onClick={() => {}}>
      <span className={`flex-1`}></span>
    </button>
  )
}

export default CustomButton