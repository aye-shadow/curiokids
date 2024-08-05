import React from 'react'
import Buttons from '.';
import Link from 'next/link';

const GetStarted = () => {
  return (
    <div>
        <Link href='/start-now'>
        <Buttons className='bg-[#14B8A5] hover:bg-[#14B8A6]'>
            Get Started
        </Buttons>
        </Link>
    </div>
  )
}

export default GetStarted