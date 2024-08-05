import React from 'react'
import smilinggirl from '@/public/smiling-girl.svg'
import Image from 'next/image'
const SmilingGirl = () => {
  return (
    <div>
        <Image src={smilinggirl} alt='smiling girl' />
    </div>
  )
}

export default SmilingGirl