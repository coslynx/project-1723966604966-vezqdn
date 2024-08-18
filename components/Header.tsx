"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useStore } from "@/store";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const { data: session } = useSession();
  const { setAuthModalOpen } = useStore();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          Fitness Hub
        </Link>
        <nav className="flex items-center gap-4">
          {session ? (
            <>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="md:hidden"
              >
                <HiOutlineMenuAlt3 className="text-2xl" />
              </button>
              <ul
                className={`flex flex-col md:flex-row gap-4 ${
                  showMenu ? "block" : "hidden"
                } md:block`}
              >
                <li>
                  <Link href="/dashboard" className="text-gray-700 hover:underline">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/goals" className="text-gray-700 hover:underline">
                    Goals
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <BiUserCircle className="text-gray-700" />
                  <span className="text-gray-700">{session.user.name}</span>
                  <button
                    onClick={() => signOut({ callbackUrl: "/dashboard" })}
                    className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login / Signup
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}