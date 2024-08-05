import React from 'react'
import Badge from '.'
import { TrendingUp } from 'lucide-react';

const Track = () => {
  return (
    <div>
        <Badge className='bg-[#F3E8FF]'>
        <TrendingUp className='text-[#7D3DC2] gap-4'  size={40} />
        </Badge>
    </div>
  )
}

export default Track