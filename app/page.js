import Blogs from "@/components/HomeComponents/Blogs";
import Hero from "@/components/HomeComponents/Hero";
import ListBlog from "@/components/HomeComponents/ListBlog";
import * as motion from "motion/react-client";

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

export default async function Home() {
  const postsData = await fetchPosts();
  return (
    <>
      {/* <div className="relative isolate px-6 lg:px-8 flex items-center justify-center h-screen border-b">
        <div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-3xl ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Your Gateway to Expert Advice and Inspiration
              </h1>
              <p className="mt-8 text-pretty text-base font-medium text-gray-500">
                Dive into a world of insightful blogs, expert tips, and
                inspiring stories that will elevate your knowledge and spark
                your creativity. Whether you're seeking guidance, fresh ideas,
                or just a dose of motivation, we've got you covered. Join our
                community and unlock the potential to thrive in every aspect of
                your life
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Hero></Hero>
      <Blogs />
      <section className="bg-[#f9f9fb] py-20">
        <div className="w-11/12 m-auto md:space-x-10 space-y-7 md:space-y-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="text-3xl md:text-5xl/tight font-medium w-full md:w-7/12 m-auto text-center"
          >
            Insights, Thoughts, Industry Trends, Marketing Tips
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {postsData.posts.slice(0, 4).map((post, index) => (
              <ListBlog key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
