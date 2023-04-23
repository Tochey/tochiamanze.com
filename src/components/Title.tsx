import React from "react";
import { TypeAnimation } from "react-type-animation";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import Image from "gatsby-image";
const Title = () => {
  const d = useStaticQuery(graphql`
    query TitleQuery {
      avatar: file(absolutePath: { regex: "/IMG_7327.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 100, cropFocus: EAST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <div className="flex md:space-x-10">
      <div>
        <Image
          fixed={d.avatar.childImageSharp.fixed}
          alt={d.site.siteMetadata?.author || `Tochi`}
          className="rounded-full"
        />{" "}
      </div>
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
