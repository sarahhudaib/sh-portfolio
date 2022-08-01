import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";

import Link from "next/link";
import Image from "next/image";
import React from 'react'

import urlShortener from "../../public/assets/portfolio/urlShortener.png";
import busMS from "../../public/assets/portfolio/busMS.png";
import mathKit from "../../public/assets/portfolio/mathKit.png";
import hackerNews from "../../public/assets/portfolio/hackerNews.png";
import { MdExpandMore } from "react-icons/md";


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


const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc } }) => {
  return (
    <div className="w-full text-center h-fit">
      <div className="flex flex-col w-full h-full max-w-screen-xl p-8 pt-24 mx-auto">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 font-bold text-indigo-500 capitalize cursor-pointer ">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="mt-2 mb-8 text-4xl font-bold tracking-wider text-center text-blue-500 capitalize md:text-left ">
          {title}
        </h1>

        <div className="relative h-56 mx-auto my-8 overflow-hidden w-96">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="my-4 text-2xl font-bold text-center md:text-left">
          Description
        </h2>

        <p>
          Human thy god sainted is the distinctly shrieked grave bird shrieked,
          yore borrow nevermore but gaunt maiden have nothing darkness, answer
          evermore word there from raven, sorrowsorrow from on and nevermore of
          core. Whom the meant and while i of respiterespite his lamplight. Or
          being weary parting grave lent if. Rare came stillness whether the
          lord. Bust myself whom of soul silken. The that there this my, quaint
          that only lenore stern muttered and nothing or tapping. Here lie
          lining i still. A tis some and chamber flitting. Lamplight radiant
          from no yet what, upon that that one decorum leave.
        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/sarahhudaib">
            <div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
              my github
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;