import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            icon: <GraduationCap size={22} />,
            name: 'Bachelor of Engineering',
            stream: 'Civil Engineering',
            institution: 'SJM Institute of Technology, Chitradurga',
            yop: '2022',
            board: 'VTU'
        },
        {
            id: 2,
            icon: <BookOpen size={22} />,
            name: 'Higher Secondary',
            stream: 'PCMB',
            institution: 'Alvas PU College, Moodbidri',
            yop: '2018',
            board: 'Karnataka PUC Board'
        },
        {
            id: 3,
            icon: <School size={22} />,
            name: 'Secondary',
            stream: '-',
            institution: 'ACO School, Ilkal',
            yop: '2016',
            board: 'KSEEB'
        }
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>
                <p className="section-desc">My academic journey that built the foundation for my career.</p>

                <div className="edu-timeline">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="edu-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="edu-card-accent"></div>
                            <div className="edu-card-header">
                                <div className="edu-icon-wrap">
                                    {edu.icon}
                                </div>
                                <div className="edu-header-text">
                                    <h3 className="edu-degree">{edu.name}</h3>
                                    {edu.stream !== '-' && (
                                        <span className="edu-stream">{edu.stream}</span>
                                    )}
                                </div>
                            </div>
                            <div className="edu-details">
                                <div className="edu-detail-item">
                                    <MapPin size={14} />
                                    <span>{edu.institution}</span>
                                </div>
                            </div>
                            <div className="edu-meta">
                                <span className="edu-year-badge">
                                    <Calendar size={12} />
                                    {edu.yop}
                                </span>
                                <span className="edu-board-badge">{edu.board}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
