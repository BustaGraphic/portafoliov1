"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Front",
    id: "front",
    content: (
      <div className="containere">
        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per html">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <span className="skill-per javascript">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">React</span>
          <div className="skill-bar">
            <span className="skill-per react">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Angular</span>
          <div className="skill-bar">
            <span className="skill-per angular">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Tailwind</span>
          <div className="skill-bar">
            <span className="skill-per tailwind">

            </span>
          </div>
        </div>

      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="containere">
        <div className="skill-box">
          <span className="title">Java</span>
          <div className="skill-bar">
            <span className="skill-per java">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Python</span>
          <div className="skill-bar">
            <span className="skill-per python">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Node Js</span>
          <div className="skill-bar">
            <span className="skill-per nodejs">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Hibernate</span>
          <div className="skill-bar">
            <span className="skill-per hibernate">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Spring</span>
          <div className="skill-bar">
            <span className="skill-per spring">

            </span>
          </div>
        </div>
        

      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="containere">
        <div className="skill-box">
          <span className="title">Photoshop</span>
          <div className="skill-bar">
            <span className="skill-per photoshop">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Illustrator</span>
          <div className="skill-bar">
            <span className="skill-per illustrator">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">After Effects</span>
          <div className="skill-bar">
            <span className="skill-per ae">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Figma</span>
          <div className="skill-bar">
            <span className="skill-per figma">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">InDesign</span>
          <div className="skill-bar">
            <span className="skill-per indes">

            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">XD</span>
          <div className="skill-bar">
            <span className="skill-per xd">

            </span>
          </div>
        </div>
        

      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("front");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white  sm:mb-[110px] mb-[-170px] " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 sm:items-center  px-4 xl:gap-16 pt-[200px] xl:px-16 ">
        <div className="boxabout lg:w-[496px] " />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center items-start">
          <h2 className="text-4xl font-bold text-white mb-4">About <span className="text-gradient ">Me</span>
          </h2>
          <p className="text-base lg:text-lg">
          From graphic designer to web developer. I fuse visual creativity with technical skills to create captivating web experiences. Specializing in HTML, CSS and JavaScript, my multidisciplinary approach brings technical precision to user interface and user experience. Committed to continue learning and contributing to the world of web development, merging design and functionality to create impactful experiences.          </p>

        </div>

      </div>
      <div className="flex flex-col items-center mb: pt-[70px]">
        <div className="flex flex-row justify-start mt-8 sm:pb-[0px]">
          <TabButton
            onClick={() => handleTabChange("front")}
            name="Front-End"
            isSelected={tab === "front"}
          >
            {" "}
            {" "}
          </TabButton>
          <TabButton
            onClick={() => handleTabChange("education")}
            name="Back-End"
            isSelected={tab === "education"}
          >
            {" "}
            Back-End{" "}
          </TabButton>
          <TabButton
            onClick={() => handleTabChange("certifications")}
            name="Design"
            isSelected={tab === "certifications"}
          >
            {" "}
            Design{" "}
          </TabButton>
        </div>

        {TAB_DATA.find((t) => t.id === tab).content}


      </div>



    </section>
  );
};

export default AboutSection;