import React from 'react'
import Bulbs from '@/public/Bulb.png'
import Image from 'next/image'

const Bulb = () => {
  return (
    <div>
        <Image src={Bulbs} alt='Bulb' />
    </div>
  )
}

export default Bulb