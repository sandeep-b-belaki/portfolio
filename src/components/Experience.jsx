import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Kutumb',
            role: 'QA Engineer',
            location: 'Bangalore, India',
            period: 'Sep 2025 - Present',
            type: 'current',
            summary: 'Leading mobile QA for a community-focused social platform, ensuring seamless experiences for millions of users across Android & iOS.',
            highlights: [
                'Owned end-to-end mobile testing across Android & iOS, ensuring zero critical bugs in production releases',
                'Executed functional, regression, smoke, sanity & exploratory testing for every sprint cycle',
                'Validated API integrations via Postman, catching backend-mobile communication gaps early',
                'Tested performance, usability & compatibility across 20+ device configurations',
                'Collaborated closely with developers & PMs to triage, prioritize, and resolve issues faster'
            ],
            tools: ['Postman', 'ADB', 'Charles Proxy', 'Firebase', 'BrowserStack', 'JIRA']
        },
        {
            company: 'Moolya Software Testing Pvt Ltd',
            role: 'QA Engineer',
            location: 'Bangalore, India',
            period: 'Mar 2025 - Sep 2025',
            type: 'past',
            summary: 'Delivered cross-platform quality assurance for diverse client projects spanning mobile and web applications.',
            highlights: [
                'Tested Android, iOS & Web applications, ensuring quality across multiple platforms',
                'Performed functional, regression, exploratory & usability testing across sprints',
                'Maintained and updated test suites using TestRail for comprehensive coverage tracking',
                'Created mind maps to visualize test coverage and improve test planning',
                'Streamlined testing workflows by collaborating with cross-functional teams'
            ],
            tools: ['TestRail', 'JIRA', 'BrowserStack', 'Mind Maps']
        },
        {
            company: 'BANGDB',
            role: 'QA Engineer',
            location: 'Remote',
            period: 'Apr 2023 - Feb 2025',
            type: 'past',
            summary: 'Built the QA foundation for a NoSQL database startup — from manual testing to automation, across web, mobile & API layers.',
            highlights: [
                'Designed & executed manual test cases for web apps, APIs, system & performance testing',
                'Implemented end-to-end testing following STLC from requirements to sign-off',
                'Performed functional, regression, integration & smoke testing across Web, Android & iOS',
                'Identified, documented & tracked 200+ defects using JIRA with clear reproducibility steps',
                'Contributed to automation testing using Java and Selenium, reducing regression time',
                'Worked in Agile/Scrum environments, actively participating in sprint ceremonies'
            ],
            tools: ['Selenium', 'Java', 'Charles Proxy', 'Android Studio', 'BrowserStack', 'Xcode', 'MySQL', 'Amplitude', 'Firebase', 'JIRA']
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.div
                    className="exp-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Career</span>
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Work Experience</h2>
                    <p className="exp-subtitle">3+ years of ensuring quality across mobile, web & API platforms</p>
                </motion.div>

                <div className="exp-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className={`exp-timeline-item ${exp.type === 'current' ? 'exp-current' : ''}`}
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Timeline node */}
                            <div className="exp-node">
                                <div className={`exp-node-dot ${exp.type === 'current' ? 'exp-node-active' : ''}`}>
                                    {exp.type === 'current' && <span className="exp-pulse"></span>}
                                </div>
                                {index < experiences.length - 1 && <div className="exp-node-line"></div>}
                            </div>

                            {/* Card */}
                            <div className="exp-card">
                                <div className="exp-card-header">
                                    <div className="exp-card-title-row">
                                        <div className="exp-company-icon">
                                            <Briefcase size={18} />
                                        </div>
                                        <div className="exp-title-group">
                                            <h3 className="exp-role">{exp.role}</h3>
                                            <span className="exp-company-name">
                                                {exp.company}
                                                <ArrowUpRight size={13} className="exp-arrow" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="exp-meta">
                                        <span className={`exp-period ${exp.type === 'current' ? 'exp-period-active' : ''}`}>
                                            <Calendar size={12} />
                                            {exp.period}
                                        </span>
                                        <span className="exp-location">
                                            <MapPin size={12} />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="exp-summary">{exp.summary}</p>

                                <div className="exp-highlights">
                                    {exp.highlights.map((item, i) => (
                                        <div className="exp-highlight-item" key={i}>
                                            <span className="exp-highlight-bullet"></span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="exp-tools">
                                    {exp.tools.map((tool, i) => (
                                        <span className="exp-tool-tag" key={i}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
