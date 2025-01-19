import Link from "next/link";
import React from "react";

const companies = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacypolicy" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-t from-themeColor to-themeColor2 pt-14">
      <div className="w-11/12 m-auto divide-y divide-white/30 space-y-8 md:space-y-16">
        {/* Main Information Footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 divide-y divide-white/30 md:divide-y-0">
          {/* Logo and company information */}
          <div className="col-span-2 space-y-3">
            <div className="flex lg:flex-1">
              <Link
                href="/"
                className="-m-1.5 p-1.5 flex items-center justify-start gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 fill-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                    clipRule="evenodd"
                  />
                </svg>

                <h4 className="font-bold text-3xl text-white">
                  Blog<span className="">Lume</span>
                </h4>
              </Link>
            </div>
            <div>
              <p className="text-gray-200 text-sm">
                Your go-to destination for the latest news and insightful blogs.
                At BlogLume, we illuminate every corner of the world with our
                comprehensive coverage and thought-provoking articles. Stay
                informed and inspired with our diverse range of topics, from
                current events to lifestyle tips.
              </p>
            </div>
            {/* Social Media Logos */}
            <div className="space-y-3">
              <h3 className="text-white text-sm font-semibold">Follow us on</h3>
              <div className="flex items-center gap-2">
                {/* Facebook Link */}
                <Link href="#">
                  <div className="p-2 bg-themeColor/30 w-fit rounded hover:bg-themeColor">
                    <svg
                      className="size-4 !fill-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </div>
                </Link>
                {/* Instagram LInk */}
                <Link href="#">
                  <div className="p-2 bg-themeColor/30 w-fit rounded hover:bg-themeColor">
                    <svg
                      className="size-4 !fill-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                </Link>
                {/* Youtube Link */}
                <Link href="#">
                  <div className="p-2 bg-themeColor/30 w-fit rounded hover:bg-themeColor">
                    <svg
                      className="size-4 !fill-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Company Information Menu */}
          <div className="space-y-3 pt-2 md:pt-0">
            <h3 className="text-base font-semibold text-white">Company</h3>
            <div>
              {companies.map((company) => (
                <div key={company.name}>
                  <Link href={company.href} className="text-gray-200 text-sm">
                    {company.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Categories */}
          <div className="space-y-3 pt-2 md:pt-0">
            <h3 className="text-base font-semibold text-white">Categories</h3>
            <div>
              {companies.map((company) => (
                <div key={company.name}>
                  <Link href={company.href} className="text-gray-200 text-sm">
                    {company.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Latest Blog */}
          <div className="space-y-3 pt-2 md:pt-0">
            <h3 className="text-base font-semibold text-white">Latest Blog</h3>
            <div>
              {companies.map((company) => (
                <div key={company.name}>
                  <Link href={company.href} className="text-gray-200 text-sm">
                    {company.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom nav*/}
        <div className="w-full py-3 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} BlogLume. All Rights Reserved. Developed by
            <Link
              href="https://tasnimul.vercel.app/"
              target="_blank"
              className=""
            >
              Tasnimul Haque
            </Link>
          </div>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacypolicy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
