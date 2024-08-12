"use client";
import React from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { Button } from '../ui/button';
const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
        <Button className='w-full ' size="lg" variant="outline" onClick={()=>{}}>
            <FcGoogle />
        </Button>
        <Button className='w-full ' size="lg" variant="outline" onClick={()=>{}}>
            <FaGithub />
        </Button>
        
    </div>
  )
}

export default Social