"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github.png";
import LinkedInIcon from "../../../public/linkedin.png";
import BehanceIcon from "../../../public/behance.png";
import GithubIconC from "../../../public/githubcolor.png";
import LinkedInIconC from "../../../public/linkedincolor.png";
import BehanceIconC from "../../../public/behancecolor.png";
import DiscordIcon from "../../../public/discord.png";
import XIcon from "../../../public/x.png";
import DiscordIconC from "../../../public/discordC.png";
import XIconC from "../../../public/XC.png";
import Html from "../../../public/images/html.png";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isBehanceHovered, setIsBehanceHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isXHovered, setIsXHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="sm:py-[210px]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 sm:pb-[40px]">
        Contact <span className="text-gradient">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative">
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am open to new job opportunities and my email is always at your disposal. Feel free to contact me, either to ask a question or just to say hello. I will do my best to get back to you as soon as possible.
          </p>
          <div className="socials flex flex-row gap-3 sm:pl-[10px] color-white">
            <div
              onClick={() => {
                window.open("https://github.com/BustaGraphic", "_blank");
              }}
              onMouseEnter={() => setIsGithubHovered(true)}
              onMouseLeave={() => setIsGithubHovered(false)}
              className=" bn5b"
            >
              <Image
                src={isGithubHovered ? GithubIconC : GithubIcon}
                alt="LinkedIn Icon"
                className="p-[12px] move-right"
              />
            </div>
            <div
              onClick={() => {
                window.open("https://www.be.net/bustagraphic", "_blank");
              }}
              onMouseEnter={() => setIsBehanceHovered(true)}
              onMouseLeave={() => setIsBehanceHovered(false)}
              className=" bn5b"
            >
              <Image
                src={isBehanceHovered ? BehanceIconC : BehanceIcon}
                alt="LinkedIn Icon"
                className="p-[12px] move-right"
              />
            </div>
            <div
              onClick={() => {
                window.open("https://www.linkedin.com/in/josuebusta/", "_blank");
              }}
              onMouseEnter={() => setIsLinkedInHovered(true)}
              onMouseLeave={() => setIsLinkedInHovered(false)}
              className=" bn5b"
            >
              <Image
                src={isLinkedInHovered ? LinkedInIconC : LinkedInIcon}
                alt="LinkedIn Icon"
                className="p-[12px] move-right"
              />
            </div>
            <div
              onClick={() => {
                window.open("https://twitter.com/BustaGRAPHIC", "_blank");
              }}
              onMouseEnter={() => setIsXHovered(true)}
              onMouseLeave={() => setIsXHovered(false)}
              className=" bn5b"
            >
              <Image
                src={isXHovered ? XIconC : XIcon}
                alt="LinkedIn Icon"
                className="p-[12px] move-right"
              />
            </div>
            
            
            <div
              onClick={() => {
                window.open("https://www.discordapp.com/users/345233242992934913", "_blank");
              }}
              onMouseEnter={() => setIsDiscordHovered(true)}
              onMouseLeave={() => setIsDiscordHovered(false)}
              className=" bn5b"
            >
              <Image
                src={isDiscordHovered ? DiscordIconC : DiscordIcon}
                alt="LinkedIn Icon"
                className="p-[12px] move-right"
              />
            </div>

            
          </div>
        </div>

        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="rounded-[17.6px] border border-solid border-[#ffffff2b] shadow-[9px_4px_15.7px_#00000040] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [background:linear-gradient(200deg,rgba(226.31,221.6,221.6,0.15)_0%,rgba(0,0,0,0.15)_100%)] block w-full p-2.5"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="rounded-[17.6px] border border-solid border-[#ffffff2b] shadow-[9px_4px_15.7px_#00000040] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [background:linear-gradient(200deg,rgba(226.31,221.6,221.6,0.15)_0%,rgba(0,0,0,0.15)_100%)] block w-full p-2.5"
                  placeholder="Your subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="rounded-[17.6px] border border-solid border-[#ffffff2b] shadow-[9px_4px_15.7px_#00000040] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [background:linear-gradient(200deg,rgba(226.31,221.6,221.6,0.15)_0%,rgba(0,0,0,0.15)_100%)] block w-full p-2.5"
                  placeholder="Message..."
                />
              </div>
              <button
                type="submit"
                className="py-3.5 px-50 rounded-lg bg-gradient-to-br from-[#0BE26E] to-[#A12AFF] bn7 text-black font-semibold"
              >
                Send Message
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
