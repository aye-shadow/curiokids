import React from 'react'
import Buttons from '.'
import Link from 'next/link'

const LearnMore = () => {
  return (
    <div>
        <Link href='start-now'>
        <Buttons className='bg-[#FAFAF9] text-[#44403C]'>
            Learn More
        </Buttons>
        </Link>
    </div>
  )
}

export default LearnMore