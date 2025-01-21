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
    title: `${post.title ? post.title : "BlogLume"} — BlogLume`,
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
      <div className="py-7 md:py-12 space-y-10">
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
            className="w-full object-cover h-auto md:h-[30rem]"
            width={500}
            height={500}
            alt=""
            src="https://images.unsplash.com/photo-1699286756200-d2dde241262c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Image>
        </div>
        <div className="w-8/12 m-auto text-base space-y-2">
          <p>
            Why did the developer bring a flashlight to the legacy codebase?
            Because every time they tried to refactor it, they found more bugs
            hiding in the dark corners.
          </p>{" "}
          <p>
            The thing is, working with legacy code can also be bad—worse than
            that joke even! Whether you’ve inherited a decades-old codebase or
            are revisiting your own past work, working with a legacy codebase
            can be a time-consuming and overwhelming process—especially if
            there’s no documentation.
          </p>{" "}
          <p>
            Having well-documented code, legacy or otherwise, is critical for
            maintaining software quality and informing future development work.
            This is where GitHub Copilot can help. While conversations around
            Copilot often focus on writing new code, it’s equally valuable for
            making sense of existing code. By using its natural language
            processing capabilities, you can work with Copilot to document
            complex logic, explain obscure functions, and even suggest
            improvements to enhance readability.
          </p>{" "}
          <p>
            In this blog post, we’ll explore practical tips and examples for
            using GitHub Copilot to document and explain legacy code
            effectively—and all these features are available in our Copilot Free
            tier plan, which is included with every personal GitHub account.
          </p>{" "}
          <p>
            Whether you’re dealing with a monolithic application, cryptic
            comments, or no documentation at all, these techniques will help you
            bring clarity to your codebase and set it up for long-term success.
            Oh, and if you’re curious, I powered GitHub Copilot with Anthropic’s
            Claude 3.5 Sonnet model to run the examples below—but you can also
            use models from OpenAI, too.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
