import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in ${
        pageScroll && "bg-black text-[#fff]"
      }`}
    >
      <div className="flex items-center justify-between w-full h-full max-w-screen-xl p-4 mx-auto">
        <Link href="/#home">
          <h1 className="text-3xl font-bold tracking-wider underline uppercase cursor-pointer lg:text-4xl underline-offset-2">
            Sarah
          </h1>
        </Link>
        <div>
          {/* <ul className="hidden md:flex">
            
            <Link href='/#home'>
            <li className="ml-10 text-sm tracking-wider uppercase duration-200 ease-out cursor-pointer hover:scale-105">home</li>
            </Link>
          
              
          </ul>
          instead of repeating this for all links, I can just use the links array above and map through it 
          and create a link for each one. <ul>
          */}

          {/* for navigating the links */}
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-sm tracking-wider uppercase duration-200 ease-out cursor-pointer hover:scale-105">
                  {link}
                </li>
              </Link>
            ))}
          </ul>
          {/* FaIcons -> custom 3 dot for small screens*/}

          {!navigation && (
            <div
              className="cursor-pointer md:hidden"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={20} />
            </div>
          )}
        </div>
      </div>
      {/* for the mobile menu (hamburger menu)*/}

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link href="/#home">
                <h2 className="text-3xl font-bold tracking-wider underline uppercase cursor-pointer underline-offset-2">
                  sarah
                </h2>
              </Link>

              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-20 mt-24 h-fit">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-2 text-xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <div className="grid w-4/5 grid-cols-2 gap-10 mx-auto">
                <div className="flex items-center justify-center p-3 rounded-full shadow-md cursor-pointer shadow-white">
                  <FaLinkedin size={25} />
                </div>
                <div className="flex items-center justify-center p-3 rounded-full shadow-md cursor-pointer shadow-white">
                  <FaTwitter size={25} />
                </div>
                <div className="flex items-center justify-center p-3 rounded-full shadow-md cursor-pointer shadow-white">
                  <FaFacebook size={25} />
                </div>
                <div className="flex items-center justify-center p-3 rounded-full shadow-md cursor-pointer shadow-white">
                  <FaGithub size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// rafce component
