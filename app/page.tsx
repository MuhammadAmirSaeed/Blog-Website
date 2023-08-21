import Image from 'next/image'
import Link from 'next/link'
import PaddingContainer from '../components/padding/padding-container'
import Posts from '../components/Posts/posts'
import {DUMMY_POSTS} from "../Data"
export default function Home() {
  return (
    <PaddingContainer>
    <main className='h-auto space-y-10'>
    <div>
      <Posts post={DUMMY_POSTS[0]} /> 
    </div>
   
    </main>
    </PaddingContainer>
  )
}


 