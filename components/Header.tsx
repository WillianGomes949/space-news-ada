"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex gap-4 items-center justify-between bg-gray-800 text-white p-4">
      <div className=" container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex gap-4 items-center">
            <Image
              src="/spaceLogo.png"
              alt="Space News Logo"
              width={50}
              height={50}
              className="inline-block mr-2"
            />
            <h1 className="text-2xl font-bold">Space News</h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/trand">Trand</Link>
              </li>
              <li>
                <Link href="/categoria">Category</Link>
              </li>
              <li>
                <Link href="/sobre">About</Link>
              </li>
            </ul>
          </nav>
          <nav className="block md:hidden">
            {/* Mobile Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IoMenu size={30}/>
            </button>
          </nav>
        </div>
        {isMenuOpen && (
          <div className="border border-gray-400 p-4 rounded-xl mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/">Home</Link>
              <Link href="/trand">Trand</Link>
              <Link href="/categoria">Category</Link>
              <Link href="/sobre">About</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
