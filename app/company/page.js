import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Company — BlogLume",
  description:
    ": Your go-to destination for the latest news and insightful blogs. At BlogLume, we illuminate every corner of the world with our comprehensive coverage and thought-provoking articles. Stay informed and inspired with our diverse range of topics, from current events to lifestyle tips.",
};

const page = () => {
  return (
    <div className="w-11/12 m-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured Image */}
        <div>
          <Image
            className="w-full h-96 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1557113166-6bf8102e535b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt=""
          ></Image>
        </div>
        {/* About Company */}
        <div className="flex flex-col justify-center">
          <p>
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
