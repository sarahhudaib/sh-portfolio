import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl px-8 py-16 mx-auto text-center md:text-left">
        <h2 className="py-4 text-5xl font-bold tracking-wider text-center text-blue-500 uppercase md:text-7xl">
          about me
        </h2>

        <div className="px-8 my-8 shadow-xl shadow-blue-300">
          <p className="max-w-2xl py-4 mx-auto">
            At dolor dolor lorem clita ipsum sea sanctus labore rebum diam. Amet
            ipsum et stet sadipscing dolores amet clita amet vero, sed takimata
            lorem ea sed dolore amet accusam sadipscing, nonumy diam consetetur
            lorem et duo sit sed amet. Est vero eos consetetur gubergren, ipsum
            erat et est nonumy est duo eirmod. Ea ipsum sed elitr labore
            consetetur et stet, et accusam sea ipsum sed clita, sanctus duo et
            diam nonumy amet et diam erat sit. Dolor diam ipsum dolor et dolor
            sed, kasd amet eos sea sed amet ea et sea. Consetetur ea voluptua
            dolor duo, eos ut vero.
          </p>
          <p className="max-w-2xl py-4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="max-w-2xl py-4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
              resume
              <span className="duration-100 ease-in -rotate-90 group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
              my portfolio
              <span className="duration-100 ease-in -rotate-90 group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
