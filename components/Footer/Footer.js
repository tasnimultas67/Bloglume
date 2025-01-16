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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6 divide-y divide-white/30 md:divide-y-0">
          {/* Logo and company information */}
          <div className="md:col-span-2 space-y-3">
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
