import React from 'react'

function Hero() {
  return (
    <div>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, or rent a car
            </h1>
            <p className='hero__subtitle'>
                streamline your car rental experience
            </p>
            <CustomButton/>
        </div>
        
    </div>
  )
}


export default Hero