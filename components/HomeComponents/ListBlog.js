import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const featuredPhotos = [
  "https://plus.unsplash.com/premium_photo-1661957705604-15f37be44856?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737085595604-a27b96d8ba69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737085595262-e383f065a093?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723813711320-ffbb0bcd53c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1673890049398-f494a9df562a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1673285091719-a12e803e725f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1673285092015-cf1dfb01af91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708777219970-ccfd65036b3a?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ListBlog = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 group/listCard hover:bg-gray-100 border border-transparent hover:border-gray-200 rounded-lg"
    >
      {/* Featured Image */}
      <div>
        <Image
          className="rounded-lg group-hover/listCard:rounded-tl-lg group-hover/listCard:rounded-bl-lg group-hover/listCard:rounded-tr-none   group-hover/listCard:rounded-br-none h-56 w-full object-cover"
          width={500}
          height={300}
          alt=""
          src={featuredPhotos[index]}
        ></Image>
      </div>
      {/* blog information */}
      <div className="flex items-start justify-center flex-col space-y-2 p-2">
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
    </motion.div>
  );
};

export default ListBlog;
