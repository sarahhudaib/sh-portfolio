import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/html.png";
import node from "../public/assets/experience/node.png";
import django from "../public/assets/experience/django.jpg";
import python from "../public/assets/experience/python.png";
import github from "../public/assets/experience/github.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
        id: 7,
        title: "Python",
        src: python,
      },
    {
      id: 8,
      title: "Node JS",
      src: node,
      },
    
      {
        id: 9,
        title: "Django",
        src: django,
      },
      {
        id: 10,
        title: "GitHub",
        src: github,
      },

  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl px-8 py-16 mx-auto text-center md:text-left">
        <h2 className="py-8 text-5xl font-bold tracking-wider text-center text-blue-500 uppercase md:text-7xl">
          experience
        </h2>
     

        <div className="grid gap-8 lg:grid-cols-4">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-between gap-10 p-6 duration-300 ease-in shadow-lg lg:flex-row lg:gap-0 rounded-xl hover:scale-105 odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;