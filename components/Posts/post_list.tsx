import { Post } from "@/TypesForData/DataCollection"

interface PropsPostList{
    posts:Post[]
    layout?: "vertical" | "horizontal"
}
const postList =({posts,layout:"vertical" }:PropsPostList)=>{
     

}