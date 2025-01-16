import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListBlog = ({ post }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 group/listCard hover:bg-gray-100 border border-transparent hover:border-gray-200 rounded-lg">
      {/* Featured Image */}
      <div>
        <Image
          className="rounded-lg group-hover/listCard:rounded-tl-lg group-hover/listCard:rounded-bl-lg group-hover/listCard:rounded-tr-none   group-hover/listCard:rounded-br-none h-56 w-full object-cover"
          width={500}
          height={300}
          alt=""
          src="https://images.unsplash.com/photo-1734216736262-dcb57cf50ca9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Image>
      </div>
      {/* blog information */}
      <div className="flex items-start justify-center flex-col space-y-2">
        <h3 className="text-lg font-medium line-clamp-2 leading-tight">
          <Link href={`/blogs/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="line-clamp-2 text-sm text-gray-600">{post.body}</p>
        <Link href={`/blogs/${post.id}`}>
          <button className="bg-black group-hover/listCard:bg-themeColor2 rounded-md text-gray-200 text-xs py-1.5 px-3">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListBlog;
