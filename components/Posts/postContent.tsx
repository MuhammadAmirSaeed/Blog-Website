import { Post } from "@/TypesForData/DataCollection";
import {FiArrowRight} from "react-icons/fi"



import React from "react";
interface PostContentProps {
  post: Post;
}

const postContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center flex-wrap gap-2  text-neutral-400 text-sm ">
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-500"
              : "text-indigo-500"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>
          {`
    ${post.author.first_name} ${post.author.last_name}
  `}
        </div>
        <div className="  w-2 h-2  rounded-full bg-neutral-200" />
        <div>1 mint</div>
        <div className="  w-2 h-2  rounded-full bg-neutral-200" />
        <div> 1 month ago</div>
      </div>
      {/* title */}
      <div className="text-2xl font-medium">{post.title}</div>
      {/* description */}
      <div className="loading-snug text-neutral-500">
        {" "}
        <p> {post.description}</p>
      </div>
      {/* readmore */}
      <div className="flex item-center gap-2 pt-3">Readmore  <FiArrowRight size="14" className="mt-1 stroke-2" /></div>
    </div>
  );
};

export default postContent;
