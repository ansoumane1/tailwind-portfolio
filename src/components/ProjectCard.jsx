import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article>
      <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
        <img
          src={img}
          className="w-full h-64 object-cover rounded-t-lg"
          alt={title}
        />
        <div className="p-8 capitalize">
          <h2 className="text-xl font-medium tracking-wide">{title}</h2>
          <p className="text-slate-700 mt-4">{text}</p>
          <div className="flex gap-x-4 mt-4">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 h-8 w-8 hover:text-black duration-300"
            >
              <TbWorldWww />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 h-8 w-8 hover:text-black duration-300"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </article>
    </article>
  );
};

export default ProjectCard;
