import React from 'react'
import urlShortener from "../../public/assets/portfolio/urlShortener.png";
import busMS from "../../public/assets/portfolio/busMS.png";
import mathKit from "../../public/assets/portfolio/mathKit.png";
import hackerNews from "../../public/assets/portfolio/hackerNews.png";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
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
    
    return {
        props: { portfolios },
      };
    };
    
    const PortfoliosRoute = ({ portfolios }) => {
      return (
        <div id="portfolio" className="w-full">
          <div className="max-w-screen-xl p-4 pt-24 mx-auto text-center md:text-left">
            <h2 className="pb-16 text-5xl font-bold tracking-wider text-center text-blue-500 uppercase md:text-7xl">
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
          </div>
        </div>
      );
    };
    
    export default PortfoliosRoute;