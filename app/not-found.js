import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[100svh]">
      <Image
        className=""
        src="/notfound404.jpeg"
        width={500}
        height={500}
        alt="404 Not Found"
        priority={true}
      ></Image>
    </div>
  );
};

export default NotFound;
