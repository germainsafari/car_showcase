import Image from 'next/image';
import  CustomButton  from './CustomButton';
function Hero() {
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
            <CustomButton/>
        </div>
        
    </div>
  )
}


export default Hero