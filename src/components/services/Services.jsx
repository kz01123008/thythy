import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Autonomous Insect Monitoring System Using Deep Learning",
    description:
      "Developed a system for insect classification using deep learning and computer vision. Implemented YOLOv5 and YOLOv9 models, improving classification accuracy by 20%. Built a web platform to display real-time monitoring results.",
  },
  {
    id: 2,
    image: Image2,
    title: "Recognition of Faces in Images Using MT-CNN and Facenet Networks",
    description:
      "Explored face recognition methods using MT-CNN and Facenet models under complex conditions. Utilized diverse image datasets to test and validate models.",
  },
  {
    id: 3,
    image: Image3,
    title:
      "Improvements of the Classification of Flowers Using Deep Neural Networks",
    description:
      "Co-Author of a paper to be published in 2025 in IEEE Xplore Journal. Aimed to improve accuracy in flower classification using different solver optimization algorithms. Enhanced precision by comparing various optimization solvers within the neural network model, achieving a 20% increase in classification accuracy.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">
        Research Experience & Personal Projects
      </h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" width="80" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
