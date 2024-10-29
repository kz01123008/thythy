import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="120" />
        <h1 className="home__name">TRAN HOANG THY THY</h1>
        <span className="home__education"> Ho Chi Minh City, Vietnam</span>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          {/* <HeaderSocials /> */}
        </div>

        <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
