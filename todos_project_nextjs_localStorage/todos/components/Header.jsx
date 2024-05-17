// components/Header.js

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-black">TodoList</span>
        </h1>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href={"/"}
            className="mr-5 hover:text-gray-900 mr-5 hover:bg-green-800 border-2 px-5 py-2 
            text-black border-green-800 rounded"
          >
            Add Todo
          </Link>
          <Link
            href={"/todos"}
            className="mr-5 hover:text-white hover:bg-green-800 border-2 p-2 
					text-black border-green-800 rounded"
          >
            My Todos
          </Link>
        </nav>
      </div>
      <hr className="border-t-2 border-gray-200" />
    </header>
  );
};

export default Header;
