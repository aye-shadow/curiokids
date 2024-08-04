import React from 'react'
import ScholarHat from '@/public/Scholar.png'
import Image from 'next/image'
const Scholar = () => {
  return (
    <div>
        <Image src={ScholarHat} alt='scholar' />
    </div>
  )
}

export default Scholar