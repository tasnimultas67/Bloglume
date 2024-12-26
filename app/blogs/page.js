import Blogs from "@/components/BlogsComponents/Blogs";
import React from "react";

async function fetchPosts() {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const page = async () => {
  const postsData = await fetchPosts();
  return (
    <>
      <div className="bg-white pt-24 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          {/* Blogs */}
          <Blogs postsData={postsData} />
        </div>
      </div>
    </>
  );
};

export default page;
