import Image from 'next/image'
import Link from 'next/link'
import PaddingContainer from '../components/padding/padding-container'
import Posts from '../components/Posts/posts'
import {DUMMY_POSTS} from "../Data"
export default function Home() {
  return (
    <PaddingContainer>
    <main className='h-auto space-y-10'>
    
      <Posts post={DUMMY_POSTS[0]} /> 
      <Posts  post={DUMMY_POSTS[1] } />
      <Posts layout='vertical' post={DUMMY_POSTS[3] } />
    
   
    </main>
    </PaddingContainer>
  )
}


 