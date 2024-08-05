import Link from 'next/link'
import React from 'react'
import Buttons from '.'

const AndMore = () => {
  return (
    <div>
        <Link href={'/about'}>
          <Buttons className='bg-[#14B8A5] hover:bg-[#14B8A6] rounded-full'>
            And More
          </Buttons>
        </Link>
    </div>
  )
}

export default AndMore