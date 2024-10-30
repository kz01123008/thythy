import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaInstagram } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.linkedin.com/in/thy-thy-tran-288628332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/hoangthythy.tran?mibextid=ZbWKwL' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.instagram.com/hoangthythytran/profilecard/?igsh=MWJndzdhODQxczhucw==' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaInstagram />
            </a>

            <a href='https://www.google.com/intl/vi/gmail/about' className='home__social-link' target='_blank' rel='noreferrer'>
                hoangthythy2007@gmail.com
            </a>
        </div>
    );
};

export default HeaderSocials;
