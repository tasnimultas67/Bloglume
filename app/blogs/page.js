import Blogs from "@/components/BlogsComponents/Blogs";
import React from "react";

export const metadata = {
  title: "Blogs — BlogLume",
  description:
    ": Your go-to destination for the latest news and insightful blogs. At BlogLume, we illuminate every corner of the world with our comprehensive coverage and thought-provoking articles. Stay informed and inspired with our diverse range of topics, from current events to lifestyle tips.",
};

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
      <div className="bg-white pt-10 sm:pt-7 sm:pb-16">
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
