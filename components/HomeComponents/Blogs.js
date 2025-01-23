import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const featuredPhotos = [
  "https://images.unsplash.com/photo-1532456452989-c21c6055c6c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661963152804-b11296cf1be3?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1553949285-bdcb31ec5cba?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1553949333-0510da388b82?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503776768674-0e612f631345?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1716300603189-999fe5a312c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661964060727-8d43315efc90?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719790882622-ac195718c7a9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1631972785012-b26634664a0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1637680620358-b64570c219d7?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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

export default async function Blogs() {
  const postsData = await fetchPosts();
  //   console.log(postsData);

  return (
    <div className="bg-white py-14 sm:py-24">
      <div className="mx-auto w-[97%]">
        <div className="m-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="text-pretty text-4xl font-semibold sm:leading-tight text-transparent bg-gradient-to-t from-themeColor2 to-themeColor sm:text-6xl bg-clip-text"
          >
            Adapting and Thriving in a Changing World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="mt-2 text-lg/8 text-gray-600"
          >
            Learn how to grow your business with our expert advice.
          </motion.p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-2 lg:mx-0 lg:max-w-none md:grid-cols-6">
          {postsData.posts
            .slice(0, 9)
            .reverse()
            .map((post, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                className={`${
                  index === 0 ? "md:col-span-5 row-span-2 col-span-2" : ""
                }`}
                key={post.id}
              >
                <div className="group relative block rounded-xl focus:outline-none">
                  {/* Blog Featured Image */}
                  <div
                    className={`${
                      index === 0
                        ? "h-[250px] md:h-[420px]"
                        : "h-[170px] md:h-[200px]"
                    } shrink-0 relative rounded-2xl overflow-hidden w-full  before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900`}
                  >
                    <Image
                      width={500}
                      height={500}
                      className="absolute top-0 left-0 object-cover w-full h-full m-auto group-hover:scale-110 transition"
                      src={featuredPhotos[index]}
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
                        index === 0
                          ? "grid-cols-2 gap-x-1"
                          : "grid-cols-1 gap-y-2"
                      } grid items-center text-xs`}
                    >
                      <time
                        className={`${
                          index === 0 ? " block" : "hidden"
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
                          src={`/TasnimulHaque-.webp`}
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
                            ? "text-2xl md:text-7xl font-normal"
                            : "text-lg/6 font-medium"
                        } text-white  line-clamp-2`}
                      >
                        <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
