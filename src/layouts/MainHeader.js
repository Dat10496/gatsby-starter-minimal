import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./MainHeader.css";

function MainHeader() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulHeroComponent {
          edges {
            node {
              backgroundImage {
                file {
                  url
                }
              }
              title
              description
            }
          }
        }
      }
    `
  );
  const { allContentfulHeroComponent } = data;
  const contentComponent = allContentfulHeroComponent.edges;

  return (
    <div className="header-box">
      <div className="nav-bar">
        <div className="header">
          <div className="left-header">
            <div className="avatar">
              <p className="name-avatar">K</p>
            </div>

            <span className="span-name">
              <p className="name">Kinka Finance</p>
            </span>
          </div>

          <span className="right-header">
            <p className="menu">Calculator</p>
            <p className="menu">Services</p>
          </span>
        </div>
      </div>

      <div className="hero-component-box">
        <div className="hero-box">
          <p className="title-text">{contentComponent[1].node.title}</p>
          <p className="hero-text">{contentComponent[1].node.description}</p>
          <div id="div-btn">
            <button id="hero-btn">
              <p id="text-btn">Lear More</p>
            </button>
          </div>
        </div>
      </div>

      <div className="first-background">
        <img
          src={contentComponent[1].node.backgroundImage.file.url}
          width="752px"
          height="584px"
          alt="background"
        />
      </div>

      <div className="second-background">
        <img
          src={contentComponent[2].node.backgroundImage.file.url}
          width="608px"
          height="482px"
          alt="background"
        />
      </div>
    </div>
  );
}

export default MainHeader;
