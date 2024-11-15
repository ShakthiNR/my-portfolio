import React from "react";
import "./about.scss";
import { experience, LottieWrapper } from "../../helper";
import { Dev, Mentor, sysDesign } from "../../helper/images";
import code from "../../assets/code.json";
import er from "/12.png";
const About = () => {
  return (
    <section id="about">
      <div className="about__header"> {"<"} About Me {"/>"}</div>
      <div className="about__wrapper">
        <div className="about__wrapper-left">
          As a self-taught software developer, I possess extensive expertise in
          product development. I excel in developing <span> MERN </span> and{" "}
          <span> MEAN</span> stack projects and am a Certified AWS Cloud
          Practitioner certification. <br /> <br /> With a strong technical
          background and passion for software development, I offer valuable
          skills to organizations seeking to build innovative applications.
        </div>

        <div className="about__wrapper-right">
          <p>Work Exprience</p>
          <WorkExperience />
        </div>

        <div></div>
      </div>
      <Expertise />
    </section>
  );
};

export default About;

const WorkExperience = () => {
  return experience?.map((elm) => {
    const { id, role, company, year } = elm;
    return (
      <div key={id} className="expr__timeline">
        <div className="expr__timeline-year">{year}</div>
        <div className="expr__timeline-role">
          <div> {role}</div>
          <div> {company}</div>
        </div>
      </div>
    );
  });
};

const Expertise = () => {
  return (
    <div className="expertise">
      <Card
        imageTag={
          // <LottieWrapper
          //   json={code}
          //   isLoop={false}
          //   style={{ width: "300px", height: "200px" }}
          // />
          <img src={er} alt="System Design" />
        }
        title="Application Development"
      />

      <Card
        imageTag={<img src={sysDesign} alt="System Design" />}
        title="System Design"
      />

      <Card
        imageTag={<img src={Mentor} alt="expretise-2" className="img-3" />}
        title="Mentorship"
      />
    </div>
  );
};

const Card = ({ imageTag, title }) => {

  return (
    <div className="card">
      {imageTag}
      <p style={{ paddingTop: title === "Application Development" ? "0.65rem" : "0" }}>{title}</p>
    </div>
  );
};
