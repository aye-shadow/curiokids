import Link from 'next/link'
import React from 'react'
import Buttons from '.'

const ViewAll = () => {
  return (
    <div>
        <Link href={'/about'}>
          <Buttons className='bg-[#FAFAF9] text-[#44403C]'>
            View All
          </Buttons>
        </Link>
    </div>
  )
}

export default ViewAll