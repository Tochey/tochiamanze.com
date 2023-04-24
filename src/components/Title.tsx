import React from "react";
import { TypeAnimation } from "react-type-animation";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const Title = () => {
  const { author } = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <div className="flex md:space-x-10 space-x-5">
        <StaticImage
          src="../content/assets/IMG_7327.jpg"
          alt={author}
          width={150}
          height={150}
          layout="constrained"
          transformOptions={{ cropFocus: "east" }}
          quality={100}
          className="rounded-full"
        />
      <div>
        <h1 className="md:text-3xl ">Tochi Amanze.</h1>
        <h2 className="md:text-2xl">
          <span>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2500,
                "Entrepreneur",
                2500,
                "Builder",
                2500,
                "Innovator",
                2500,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              speed={10}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="inline-block"
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Title;
