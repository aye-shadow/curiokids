import Link from 'next/link'
import React from 'react'
import Buttons from '.'

const AndMore = () => {
  return (
    <div>
        <Link href={'/about'}>
          <Buttons className='bg-[#14B8A5] rounded-full'>
            and more
          </Buttons>
        </Link>
    </div>
  )
}

export default AndMore