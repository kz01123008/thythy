import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="Avatar" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm TRAN HOANG THY THY, based in Ho Chi Minh City, Vietnam. I'm currently a student at Nguyễn Thượng Hiền High School, where I'm excelling in my studies with a GPA of 9.2/10 in Grade 11.<br /><br />
                            I have a strong interest in technology and have developed projects involving AI and IoT, including a system for real-time air quality monitoring. My goal is to further enhance my skills and contribute to meaningful projects in the field.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Python (Deep Learning)</li>
                            <li>Data Analysis with Excel</li>
                            <li>Computer Vision</li>
                            <li>Web Development</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;
