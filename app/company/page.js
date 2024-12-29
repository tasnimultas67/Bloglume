import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Company — BlogLume",
  description:
    ": Your go-to destination for the latest news and insightful blogs. At BlogLume, we illuminate every corner of the world with our comprehensive coverage and thought-provoking articles. Stay informed and inspired with our diverse range of topics, from current events to lifestyle tips.",
};

const page = () => {
  return (
    <div className=" m-auto py-20">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">BlogLume</h1>
          <p className="text-gray-500">Illuminating the world with news</p>
        </div>
        {/* Featured Image */}
        <div>
          <Image
            className="w-full h-[20rem] md:h-[30rem] object-cover object-center"
            src="https://images.unsplash.com/photo-1557113166-6bf8102e535b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt=""
          ></Image>
        </div>
        {/* About Company */}
        <div className="flex flex-col justify-center w-11/12 md:w-10/12 m-auto">
          <p className="text-center text-lg md:text-2xl">
            Your go-to destination for the latest news and insightful blogs. At
            BlogLume, we illuminate every corner of the world with our
            comprehensive coverage and thought-provoking articles. Stay informed
            and inspired with our diverse range of topics, from current events
            to lifestyle tips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
