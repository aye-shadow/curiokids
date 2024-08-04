import React from 'react'
import { Button, ButtonProps } from '../ui/button'
import classNames from 'classnames';
import Buttons from '.';
import Link from 'next/link';

const Login: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <div>
        <Link href={'/sign-in'}>
         <Buttons className='bg-[#14B8A5]'>
            Log-in
         </Buttons>
         </Link>              
    </div>
  )
}

export default Login