import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Company — BlogLume",
  description:
    ": Your go-to destination for the latest news and insightful blogs. At BlogLume, we illuminate every corner of the world with our comprehensive coverage and thought-provoking articles. Stay informed and inspired with our diverse range of topics, from current events to lifestyle tips.",
};

const offers = [
  {
    title: "Comprehensive Coverage",
    des: "We bring you the latest news from around the globe, covering everything from politics and business to entertainment and sports.",
  },
  {
    title: "Thought-Provoking Articles",
    des: "Our blogs delve deep into various subjects, offering unique perspectives and in-depth analysis.",
  },
  {
    title: "Lifestyle Tips",
    des: "From health and wellness to travel and fashion, we provide practical advice to help you live your best life.",
  },
  {
    title: "Community Engagement",
    des: "We value our readers and encourage you to share your thoughts and ideas. Join the conversation and be a part of our growing community.",
  },
];

const page = () => {
  return (
    <div className=" m-auto py-20">
      <div className="flex flex-col space-y-20 w-11/12 m-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10">
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
        {/* What We Offer */}
        <div className=" space-y-5">
          <h2 className="text-center text-3xl font-medium">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="p-5 py-10 bg-gray-100 rounded-2xl text-center space-y-3"
              >
                <h3 className="text-lg font-medium">{offer.title}</h3>
                <p className="text-sm text-gray-600">{offer.des}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Our Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 gap-5 content-between">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight">
              Our Vision
            </h3>
            <p>
              We envision a world where information is accessible to all, and
              where diverse voices can come together to create a richer, more
              informed society. At BlogLume, we are dedicated to fostering a
              culture of curiosity, learning, and open dialogue.
            </p>
          </div>
          <div className="ml-auto mr-0">
            <Image
              className="rounded-2xl h-[20rem] md:h-[30rem] object-cover object-center"
              src="https://images.unsplash.com/photo-1712431028580-049087ee59d8?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={700}
              alt="About Us - BlogLume"
            ></Image>
          </div>
        </div>
        {/* Join Us */}
        <div className="">
          <p className="text-2xl text-center">
            Whether you're here to stay updated on the latest news, find
            inspiration, or share your own stories, BlogLume is your go-to
            destination. Together, let's illuminate the world with knowledge and
            creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
