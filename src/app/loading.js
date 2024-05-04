import React from 'react'
import { Spinner } from '@nextui-org/react'
const loading = () => {
  return (
    <div className='flex min-h-screen w-full justify-center items-center'><Spinner/></div>
  )
}

export default loading