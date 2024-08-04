import React from 'react'
import Buttons from '.';
import Link from 'next/link';

const GetStarted = () => {
  return (
    <div>
        <Link href='/start-now'>
        <Buttons className='bg-[#14B8A5]'>
            Get Started
        </Buttons>
        </Link>
    </div>
  )
}

export default GetStarted