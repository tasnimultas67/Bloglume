import Image from "next/image";
import Link from "next/link";

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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="m-auto max-w-2xl text-center">
          <h2 className="text-pretty text-4xl font-semibold sm:leading-tight text-gray-900 sm:text-6xl">
            Adapting and Thriving in a Changing World
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {postsData.posts.slice(0, 5).map((post, index) => (
            <div
              className={`${index === 0 ? "md:col-span-4" : ""}`}
              key={post.id}
            >
              <div className="group relative block rounded-xl focus:outline-none">
                {/* Blog Featured Image */}
                <div
                  className={`${
                    index === 0
                      ? "h-[300px] md:h-[430px]"
                      : "h-[300px] md:h-[300px]"
                  } shrink-0 relative rounded-xl overflow-hidden w-full  before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900`}
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
                <div className="flex max-w-full flex-col items-start justify-between absolute bottom-0 left-0 w-full p-6 inset-x-0 z-10 space-y-2">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-200">28 Mar 2020</time>
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
                        index === 0 ? "text-2xl md:text-6xl" : "text-2xl"
                      } text-white font-semibold line-clamp-2`}
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
    </div>
  );
}
