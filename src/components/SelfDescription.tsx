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
    name: "react",
    link: "https://react.dev/",
  },
  {
    name: "AWS",
    link: "https://aws.amazon.com/",
  },
];

const Media = [
  {
    name: "twitter",
    link: "https://twitter.com/surverless",
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@surverless",
  },
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
        I am a 21 year old Cloud Engineer who enjoy building startups. I am the fastest and most curious learner I've
        ever met. I mostly mess around with-{" "}
        {FavTechnologies.map((ft) => {
          return (
            <>
              <a href={ft.link} target="_blank" rel="noopener noreferrer">
                {ft.name}
              </a>
              <span> </span>
            </>
          );
        })}
      . Currently tinkering in a AI Space
      </p>
      <ul className="my-10">
        <p>Find me Online at:</p>
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
