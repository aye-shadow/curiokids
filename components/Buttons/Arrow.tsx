import React from 'react';
import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

const Arrow = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Link href={'/about'}>
       <Button variant={'link'} className='rounded-md text-[#14B8A5] bg-[#FCFCFD]
        border border-[#E6E8EC] shadow-sm hover:bg-[#F0F0F0] w-[62px] h-[60px] flex items-center justify-center'>
         <MoveUpRight size={40} />
      </Button>
      </Link>
    </div>
  );
};

export default Arrow;
