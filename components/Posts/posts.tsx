import { Post } from '@/TypesForData/DataCollection';
import React from 'react'
import PaddingContainer from '../padding/padding-container';
import Link  from 'next/link';
import Image from 'next/image';
interface PostProps  {
    post: Post

}


const posts = ( {post}:PostProps) => {
  return (
    <Link href={`/post/${post.slug}`} className='grid grid-cols-2  gap-5' >
      <Image src={post.image}  alt={post.title} height={600} width={300}/>
       <div>{post.title}</div>
    </Link>
  )
}

export default posts
