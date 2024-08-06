import React from 'react'
import { Book } from 'lucide-react';


const Library = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Book />
      <span>Library</span>
    </div>
  )
}

export default Library