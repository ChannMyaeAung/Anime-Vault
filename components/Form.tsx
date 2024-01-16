"use client";
import React from "react";

const Form = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 md:gap-6"
      >
        <input
          type="text"
          placeholder="Search anime..."
          className="flex-1 p-2.5 bg-white border-transparent text-black rounded-full "
        />
        <button
          className="p-2.5 bg-yellow-300 absolute top-0 right-0 md:static rounded-full transition-all hover:scale-105"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Form;
