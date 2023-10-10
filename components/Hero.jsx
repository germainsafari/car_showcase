

import Image from 'next/image';
import  CustomButton  from './CustomButton';
const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, or rent a car
            </h1>
            <p className='hero__subtitle'>
                streamline your car rental experience
                with our effortless booking process
            </p>
            {/* remove this as well */}
            <p className='hero__description'>
                From compact cars to luxurious SUVs, discover a range of options tailored to meet your needs.
            </p>


            {/* here */}
            <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick = {handleScroll}
            />
        {/* remove the following code */}
        <CustomButton
              title="Special Offers"
              containerStyles="bg-primary-red text-white rounded-full mt-5 ml-5"
              // Add relevant handle click action for this button
              handleClick={() => {}}
            />


        {/* here */}
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
              <img src="./hero.png" alt="hero"
              fill className='object-contain' />
              <div className='hero__image=overlay'/>
          </div>
        </div>
    </div>
  )
}


export default Hero