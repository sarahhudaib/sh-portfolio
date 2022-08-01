import React from 'react'
import heroImage from "../public/assets/heroImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


const HomePage = () => {
   return (
    <div id="home" className="w-full h-screen text-center">
      <div className="flex flex-col items-center justify-around w-full h-full p-4 pt-24 mx-auto max-w-screen-l">
        <div className="w-64 h-64 py-4 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>

        <h1 className="py-4 text-5xl font-bold tracking-wider text-blue-500 uppercase">
          back end developer
        </h1>

        <p className="max-w-sm mx-auto text-gray-600 text-l">
          I have 1 year of experience building and designing software. Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS, Python, Django.
        </p>

        <Link href="/#me">
          <div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
            know more
            <span className="duration-100 ease-in -rotate-90 group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage