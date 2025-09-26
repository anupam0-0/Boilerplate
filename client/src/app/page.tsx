import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-6 p-10'>
      <h1 className='text-4xl font-semibold'>This is Main...</h1>
      <div>
        <p>Go to <Link className='text-blue-500' href="/register">register</Link></p>
        <p>Go to <Link className='text-blue-500' href="/login">login</Link></p>
        <p>Go to <Link className='text-blue-500' href="/dashboard" >Dashboard</Link></p>
      </div>
    </div>
  )
}

export default page