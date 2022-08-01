import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contactus.png";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl px-8 py-16 mx-auto text-center md:text-left">
        <h2 className="py-4 text-5xl font-bold tracking-wider text-center text-blue-500 uppercase md:text-7xl">
          contact me
        </h2>

        <div className="flex flex-col gap-8 mt-4 bg-white shadow-xl md:flex-row shadow-blue-300">
          <div className="w-full h-full p-4 md:w-1/2 rounded-xl">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </p>

            <div className="grid w-4/5 grid-cols-2 gap-10 mx-auto">
              <div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-blue-500 hover:scale-105">
                <FaLinkedin size={25} />
              </div>
              <div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-blue-500 hover:scale-105">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-blue-500 hover:scale-105">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-blue-500 hover:scale-105">
                <FaGithub size={25} />
              </div>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full h-full p-4 md:w-1/2 rounded-xl">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/e1276c15-efa0-42be-be06-3c2c4a5f736d"
                method="POST"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm font-light capitalize text-slate-600">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="flex p-3 border-2 border-blue-200 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm font-light capitalize text-slate-600">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="flex p-3 border-2 border-blue-200 rounded-lg focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="py-2 text-sm font-light capitalize text-slate-600">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="flex p-3 border-2 border-blue-200 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="py-2 text-sm font-light capitalize text-slate-600">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="flex p-3 border-2 border-blue-200 rounded-lg focus:outline-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="px-6 py-3 my-8 font-bold tracking-wider text-white uppercase duration-200 bg-blue-500 rounded-md cursor-pointer hover:scale-105">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;