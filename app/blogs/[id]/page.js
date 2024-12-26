import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function fetchPost(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await fetchPost(params.id);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested Post could not be found",
    };
  }
  return {
    title: `${post.title ? post.title : post.title} — Tasnimul Haque`,
    description: post.body.substring(0, 150),
  };
}

const page = async ({ params }) => {
  const post = await fetchPost(params.id);
  if (!post) {
    notFound();
  }
  return (
    <>
      <div className="py-24 md:py-32 space-y-10">
        {/* Titles & Meta Info */}
        <div className="text-center space-y-2 w-11/12 md:w-8/12 m-auto">
          <h1 className="text-4xl md:text-6xl font-semibold">{post.title}</h1>
          <ul className="flex items-center justify-center gap-2">
            {post.tags.map((tag) => (
              <li
                className="text-xs/6 bg-slate-100 py-0.5 px-3 rounded-md"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="text-sm pt-5">{post.body}</p>
        </div>
        {/* Featured Image */}
        <div className="w-full">
          <Image
            className="w-full object-cover h-full"
            width={500}
            height={500}
            alt=""
            src="https://images.unsplash.com/photo-1699286756200-d2dde241262c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default page;
