"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Html from "../../../public/images/html.png";
import Js from "../../../public/js.png";
import Css from "../../../public/css.png";
import Angular from "../../../public/angular.png";
import Bootstrap from "../../../public/bootstrap.png";
import Java from "../../../public/java.png";
import Node from "../../../public/node.png";
import Python from "../../../public/python.png";
import ReactIcon from "../../../public/react.png";
import Image from 'next/image';


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    aplications: [Html, Css, Js, ReactIcon],
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    aplications: [Html],
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    aplications: [Html],
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

];
const appIcons = {
  Html,
  Js,
  Css,
  Angular,
  Bootstrap,
  Java,
  Node,
  Python,
  ReactIcon,
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" >
      <h2 className="text-center text-4xl font-bold mt-4 mb-[-200px] md:my-[-150px] sm:pb-[210px] sm:pt-[210px]">
        My <span className="text-gradient">Projects</span>
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 my-6 h-[54px]">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Designs"
          isSelected={tag === "Designs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              aplications={project.aplications}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              appIcons={appIcons}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;