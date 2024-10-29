import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import {
  RiCodeLine,
  RiBarChartLine,
  RiUserStarLine,
  RiTeamLine,
} from "react-icons/ri"; // Sử dụng các icon có sẵn

import WorkExperience from "./WorkExperience";

const skills = [
  {
    id: 1,
    category: "Programming",
    description: "Python (including deep learning frameworks)",
    icon: <RiCodeLine />,
  },
  {
    id: 2,
    category: "Data Analysis",
    description: "Excel, Python",
    icon: <RiBarChartLine />,
  },
  {
    id: 3,
    category: "Soft Skills",
    description: "Leadership, Team Management, Event Planning, Communication",
    icon: <RiUserStarLine />,
  },
];

const Resume = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container">
        <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={"is-active"}
          selectedTabPanelClassName={"is-active"}
        >
          <TabList className="tab__list">
            {WorkExperience.map((experience, index) => {
              const { id, company } = experience;
              return (
                <Tab className="tab" key={`company-${id}`}>
                  <Button>{company}</Button>
                </Tab>
              );
            })}
          </TabList>

          {WorkExperience.map((experience) => {
            const { id, company, yearsActive, title, information } = experience;
            return (
              <TabPanel className="tab__panel" key={`panel-${id}`}>
                <h2 className="tab__panel-title">
                  {title} @ {company}
                </h2>
                <p className="tab__panel-subtitle">{yearsActive}</p>
                <ul className="tab__panel-list">
                  {information.map((info, index) => {
                    return <li key={`info-${index}`}>{info}</li>;
                  })}
                </ul>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>

      <h2 className="section__title" style={{ marginTop: "40px" }}>
        Skills
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={{ display: "flex", alignItems: "center", fontSize: "18px" }}
          >
            <span style={{ marginRight: "10px" }}>{skill.icon}</span>
            <strong>{skill.category}:</strong> {skill.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
