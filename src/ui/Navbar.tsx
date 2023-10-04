import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-white/10 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link
              aria-current="page"
              className="isomorphic-link isomorphic-link--internal flex items-center"
              href="https://unpuzzle.net"
            >
              <div className="flex items-center gap-3">
                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                <span className="ml-2 text-xl font-bold text-white">
                  Unpuzzle
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="isomorphic-link isomorphic-link--internal inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="https://unpuzzle.net"
            >
              How it works
            </Link>
            <a
              className="isomorphic-link isomorphic-link--internal inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="https://unpuzzle.net"
            >
              Pricing
            </a>
            <a
              className="isomorphic-link isomorphic-link--internal inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="https://unpuzzle.net"
            >
              Demo
            </a>
            <a
              href="https://unpuzzle.net"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Blog
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              href="https://unpuzzle.net"
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
