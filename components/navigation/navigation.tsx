import React from 'react'
import PaddingContainer from '../padding/padding-container'
import Link from 'next/link'

const navigation = () => {
    return (
        <div className='sticky top-0 left-0 right-0 bg-white bg-opacity-40 border-b backdrop-blur-md'>
      <PaddingContainer >
    <div className='flex items-center justify-between py-5'>
<Link className='text-lg font-bold' href='./'>Home</Link>
<nav>
<ul  className='flex items-center gap-4 text-neutral-600'>
   
    <li>
        <Link href='/about'>About</Link>
    </li>
    <li>
        <Link href='/contact'>Contact</Link>
    </li>
</ul>
</nav>
    </div>
      </PaddingContainer>
        </div>
  )
}

export default navigation
