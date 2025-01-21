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
      <div className="flex flex-col space-y-20 ">
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">BlogLume</h1>
          <p className="text-gray-500">Illuminating the world with news</p>

          {/* Featured Image */}

          <Image
            className="w-11/12 m-auto rounded-2xl h-[20rem] md:h-[30rem] object-cover object-center"
            src="https://images.unsplash.com/photo-1557113166-6bf8102e535b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt=""
          ></Image>
        </div>
        {/* About Company */}
        <div className="flex flex-col justify-center w-11/12 md:w-10/12 m-auto space-y-10 text-center">
          <p className="text-center text-lg md:text-2xl">
            Your go-to destination for the latest news and insightful blogs. At
            BlogLume, we illuminate every corner of the world with our
            comprehensive coverage and thought-provoking articles. Stay informed
            and inspired with our diverse range of topics, from current events
            to lifestyle tips.
          </p>
          <p>
            At BlogLume, we believe in the power of words to illuminate the
            world. Our mission is to bring you the latest news and insightful
            blogs that not only inform but also inspire. We cover a diverse
            range of topics, from current events to lifestyle tips, ensuring
            there's something for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 m-auto items-center py-10">
          <div>
            <Image
              className="rounded-2xl h-[20rem] md:h-[30rem] object-cover object-center"
              src="https://images.unsplash.com/photo-1712431104228-6fb10e02e7b6?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={700}
              alt="About Us - BlogLume"
            ></Image>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight">Our Story</h3>
            <p>
              BlogLume was born out of a passion for storytelling and a desire
              to create a platform where voices from all walks of life could be
              heard. We started as a small team of enthusiastic writers and
              journalists, and over the years, we've grown into a vibrant
              community of contributors and readers. Our journey has been fueled
              by our commitment to quality content and our love for sharing
              stories that matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
