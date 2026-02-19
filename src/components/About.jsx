import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-text-centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        Hello! I'm Sandeep B Belaki, a Quality Assurance Engineer passionate about building reliable web and mobile experiences.
                    </p>
                    <p>
                        My journey in technology began in 2019, when I started experimenting with web development by customizing Tumblr themes. Working with HTML and CSS sparked my interest and gave me a strong understanding of how web applications are built.
                    </p>
                    <p>
                        Today, I specialize in manual testing for mobile and web applications, with hands-on experience in functional, regression, and API testing. I focus on identifying issues early and collaborating closely with teams to ensure stable, high-quality releases.
                    </p>
                    <p>
                        I actively use AI-powered tools such as Cursor, Antigravity, Claude, DeepSeek, and OpenAI to improve testing efficiency and analysis. Alongside QA, I also enjoy exploring AI-assisted web design to create clean, user-friendly interfaces.
                    </p>
                    <p>
                        Core QA Tools I Use:
                    </p>
                    <ul className="skills-list">
                        <li>Java</li>
                        <li>SQL</li>
                        <li>Selenium</li>
                        <li>JIRA</li>
                        <li>Postman</li>
                        <li>Charles Proxy</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

