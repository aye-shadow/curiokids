import React from 'react'
import GetStarted from '../Buttons/Get-Started'
import LearnMore from '../Buttons/LearnMore'
import feather from 'feather-icons'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-14 mt-14'> {/* Added mt-10 for top margin */}

        <div className='text-[#44403C] text-6xl font font-bold'>
            <h1 className='md:hidden flex'>Your Child's <br /> Personalized <br/> Learning Platform</h1>
            <h1 className='md:flex hidden'>Your Child's Personalized <br/> Learning Platform</h1>
        </div>

        <div className='flex items-center justify-center gap-x-5'>
            <GetStarted />
            <LearnMore />
        </div>
    </div>
  )
}

export default Hero
