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
  }
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
        for entrepreneurship, I am the fastest and most curious learner I've
        ever met. Intrests lie in problem solving My favorite technologies at the moment
        are-{" "}
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
