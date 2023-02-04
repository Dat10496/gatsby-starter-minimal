import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./IconBlock.css";

function IconBlock({ icon }) {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulIconIntroBlock {
          edges {
            node {
              description
              title
              icon {
                file {
                  url
                }
              }
              id
            }
          }
        }
      }
    `
  );

  const { allContentfulIconIntroBlock } = data;
  const content = allContentfulIconIntroBlock.edges;
  return (
    <div className="icon-block-box">
      <p className="head-text">High Quality Output, Awesome Service</p>
      <div className="icon-box">
        {content.slice(0, 3).map((element) => (
          <div key={element.node.id} className="content-box">
            <div className="image">
              <img
                src={element.node.icon.file.url}
                alt="icon"
                width="44px"
                height="44px"
              />
            </div>
            <p className="main-title">{element.node.title}</p>
            <span className="description-box">
              <p className="description-text">{element.node.description}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconBlock;
