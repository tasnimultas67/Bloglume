import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const Hero = async () => {
  const postsData = await fetchPosts();
  return (
    <div className="w-[98%] m-auto">
      <div className="grid grid-cols-4 gap-2">
        {postsData.posts.slice(0, 3).map((post, index) => (
          <div
            className={`${
              index === 0 ? "col-span-3 row-span-2" : "col-span-1"
            }`}
            key={post.id}
          >
            <div className="group relative block rounded-xl focus:outline-none h-full">
              {/* Blog Featured Image */}
              <div
                className={`${
                  index === 0 ? "h-[90vh]" : "h-full"
                } shrink-0 relative rounded-xl overflow-hidden w-full before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900`}
              >
                <Image
                  width={500}
                  height={500}
                  className="absolute top-0 left-0 object-cover w-full h-full m-auto group-hover:scale-110 transition"
                  src={`https://images.unsplash.com/photo-1510861320402-285a6c7639ea?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt="Blog Image"
                />
              </div>
              {/* Blog Information */}
              <div
                className={`${
                  index === 0 ? "p-3 md:p-5" : "p-3 md:p-3.5"
                } flex max-w-full flex-col items-start justify-between absolute bottom-0 left-0 w-full inset-x-0 z-10 space-y-2`}
              >
                <div
                  className={`${
                    index === 0 ? "grid-cols-2 gap-x-1" : "grid-cols-1 gap-y-2"
                  } grid items-center text-xs`}
                >
                  <time
                    className={`${
                      index === 0 ? "block" : "hidden"
                    } text-gray-200 flex items-center justify-start gap-2`}
                  >
                    <Calendar className="size-4" />
                    28 Mar 2020
                  </time>
                  {/* Author Information */}
                  <div className="relative flex items-center gap-x-2">
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={`https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                      className="size-5 rounded-full bg-gray-50 object-cover"
                    />
                    <div className="text-sm/6">
                      <p className="font-medium text-gray-300">
                        Tasnimul Haque
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <h3
                    className={`${
                      index === 0
                        ? "text-2xl md:text-6xl font-semibold"
                        : "text-lg/6 font-medium"
                    } text-white line-clamp-2`}
                  >
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
