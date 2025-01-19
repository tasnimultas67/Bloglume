"use client";
import { Grid3X3, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blogs = ({ postsData }) => {
  const [viewType, setViewType] = useState("grid"); // Initial view type is 'grid'
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    // Check local storage for saved view type on component mount
    const savedViewType = localStorage.getItem("blogsViewType");
    if (savedViewType) {
      setViewType(savedViewType);
    }
  }, []);

  // Single View Function
  const handleSingleView = () => {
    setViewType("single");
    localStorage.setItem("blogsViewType", "single");
  };
  // Grid View Function
  const handleGridView = () => {
    setViewType("grid");
    localStorage.setItem("blogsViewType", "grid");
  };

  // Calculate total pages
  const totalPages = Math.ceil(postsData.posts.length / itemsPerPage);

  // Slice the data to get the current page items
  const currentData = postsData.posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    }
  };

  // Generate pagination buttons
  const generatePaginationButtons = () => {
    const buttons = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1);
      buttons.push(2);
      if (currentPage > 3) {
        buttons.push("...");
      }
      if (currentPage > 2 && currentPage < totalPages - 1) {
        buttons.push(currentPage);
      }
      if (currentPage < totalPages - 2) {
        buttons.push("...");
      }
      buttons.push(totalPages - 1);
      buttons.push(totalPages);
    }
    return buttons;
  };

  const paginationButtons = generatePaginationButtons();

  return (
    <section className="space-y-7">
      {/* View Button */}
      <div className="flex justify-end items-center m-auto gap-2">
        <button
          className={`hover:bg-gray-100 p-1 rounded group/grid-button border ${
            viewType === "single" && "bg-gray-100"
          }`}
          onClick={handleSingleView}
        >
          <Menu
            className={`size-4 text-gray-400 group-hover/grid-button:text-gray-500 ${
              viewType === "single" && "text-gray-500"
            }`}
          />
        </button>
        <button
          className={`hover:bg-gray-100 p-1 rounded group/list-button border ${
            viewType === "grid" && "bg-gray-100"
          }`}
          onClick={handleGridView}
        >
          <Grid3X3
            className={`size-4 text-gray-400 group-hover/list-button:text-gray-500 ${
              viewType === "grid" && "text-gray-500"
            }`}
          />
        </button>
      </div>
      {/* Blogs Grid */}
      <div
        className={`grid ${
          viewType === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        } gap-5 m-auto`}
      >
        {currentData.map((post) => (
          <div className="" key={post.id}>
            <div className="group relative block rounded-xl focus:outline-none">
              {/* Blog Featured Image */}
              <div
                className={`${
                  viewType === "single"
                    ? "h-[100px] md:h-[130px]"
                    : "h-[300px] md:h-[400px]"
                } shrink-0 relative rounded-xl overflow-hidden w-full before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900`}
              >
                <Image
                  width={500}
                  height={500}
                  className="absolute top-0 left-0 w-full object-cover h-full m-auto group-hover:scale-110 transition"
                  src={`https://images.unsplash.com/photo-1510861320402-285a6c7639ea?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt="Blog Image"
                />
              </div>
              {/* Blog Information */}
              <div className="flex max-w-xl flex-col items-start justify-between absolute bottom-0 left-0 w-full p-6 inset-x-0 z-10 space-y-2">
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
                      viewType === "single" ? "line-clamp-1" : "line-clamp-2"
                    } text-white font-semibold text-2xl `}
                  >
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center">
        {currentPage > 1 && (
          <button
            className="mx-1 px-2.5 py-1 border rounded text-sm dark:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {paginationButtons.map((button, index) =>
          button === "..." ? (
            <span key={index} className="mx-1 px-2.5 py-1 text-sm">
              ...
            </span>
          ) : (
            <button
              key={button}
              className={`mx-1 px-2.5 py-1 border rounded text-sm dark:text-white ${
                currentPage === button
                  ? "bg-black text-white border-themeColor"
                  : "hover:bg-themeColor/20 hover:border-themeColor"
              }`}
              onClick={() => handlePageChange(button)}
            >
              {button}
            </button>
          )
        )}
        {currentPage < totalPages && (
          <button
            className="mx-1 px-2.5 py-1 border rounded text-sm dark:text-white text-black"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default Blogs;
