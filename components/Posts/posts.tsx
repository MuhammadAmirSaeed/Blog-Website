import { Post } from '@/TypesForData/DataCollection';
import React from 'react'
import PaddingContainer from '../padding/padding-container';
import Link  from 'next/link';
import Image from 'next/image';
import PostContent from './postContent';
interface PostProps  {
    post: Post
    layout ?: "vertical" | "horizontal";

}


const posts = ( {post , layout ="horizontal"}:PostProps) => {
  return (
    <Link href={`/post/${post.slug}`} className= {`${layout === "horizontal"
    ? "grid items-center grid-cols-1 md:grid-cols-2 gap-10"
    : "space-y-10"}`} >
      <Image className='rounded-md w-full object-cover object-center h-full max-h-[250px] max-w-[500px] ' src={post.image}  alt={post.title} height={300} width={600}/>
       {/* <div>{post.title}</div> */}
       <PostContent post={post}/>
    </Link>
  )
}

export default posts
