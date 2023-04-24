import React from "react";

const FavTechnologies = [
  {
    name: "typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "nodejs",
    link: "https://nodejs.org/en/",
  },
  {
    name: "aws cdk",
    link: "https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html",
  },
  {
    name: "SAM",
    link: "https://aws.amazon.com/serverless/sam/",
  },
  {
    name: "langchain",
    link: "https://python.langchain.com/en/latest/index.html",
  },
];

const Media = [
  {
    name: "github",
    link: "https://github.com/Tochey",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/tochidon/",
  },
  {
    name: "email",
    link: "mailto:tochey@outlook.com",
  },
];

const SelfDescription = () => {
  return (
    <div className="my-5">
      <p>
        I am a Software Engineer Intern at Flagship Pioneering with a passion
        for entrepreneurship as it enables me to leverage my technical skills to
        solve real world problems. I enjoy coding, problem solving and learning
        new technologies. My favorite at the moment are -
        {FavTechnologies.map((ft) => {
          return (
            <>
              <a href={ft.link} target="_blank" rel="noopener noreferrer">
                {ft.name},
              </a>
              <span> </span>
            </>
          );
        })}
      </p>
      <ul className="my-10">
        <p>Find me Online at -</p>
        {Media.map((m) => {
          return (
            <li className="inline-block mr-5 mt-5">
              <a href={m.link} target="_blank" rel="noopener noreferrer">
                {m.name}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="italic font-extrabold">
        This site is will contain technical blogs, challenges and learnings as I
        progress through my career{" "}
      </p>
    </div>
  );
};

export default SelfDescription;
