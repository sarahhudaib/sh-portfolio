import React from "react";

import { MdExpandMore } from "react-icons/md";

import urlShortener from "../public/assets/portfolio/urlShortener.png";
import busMS from "../public/assets/portfolio/busMS.png";
import mathKit from "../public/assets/portfolio/mathKit.png";
import hackerNews from "../public/assets/portfolio/hackerNews.png";

import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        title: "math kit app",
        imageSrc: mathKit,
        url: "math-kit",
      },
      {
        id: 2,
        title: "Hacker-News-Project",
        imageSrc: hackerNews,
        url: "hacker-news",
      },
      {
        id: 3,
        title: "bus management system",
        imageSrc: busMS,
        url: "bus-MS",
      },
      {
        id: 4,
        title: "django URL shortener",
        imageSrc: urlShortener,
        url: "url-shortener",
      },
    ];
  
    return (
      <div id="portfolio" className="w-full">
        <div className="max-w-screen-xl px-8 py-16 mx-auto text-center md:text-left">
          <h2 className="py-8 text-5xl font-bold tracking-wider text-center text-blue-500 uppercase md:text-7xl">
            portfolio
          </h2>
       
          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
            {portfolios.map(({ id, title, imageSrc, url }) => (
              <Link key={id} href={`/portfolio/${url}`}>
                <div className="overflow-hidden rounded-md shadow-md cursor-pointer group shadow-gray-600">
                  <Image
                    src={imageSrc}
                    alt={title}
                    className="duration-200 rounded-md hover:scale-110"
                  />
                  <h2 className="my-4 text-base font-light text-center capitalize duration-200 group-hover:underline underline-offset-4">
                    {title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
  
          <div className="flex items-center justify-center">
            <Link href="/portfolio">
              <div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
                all projects
                <span className="duration-100 ease-in -rotate-90 group-hover:translate-x-5">
                  <MdExpandMore size={25} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;