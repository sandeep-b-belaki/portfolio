import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            icon: <GraduationCap size={20} />,
            name: 'Bachelor of Engineering',
            stream: 'Civil Engineering',
            institution: 'SJM Institute of Technology, Chitradurga',
            yop: '2022',
            board: 'VTU'
        },
        {
            id: 2,
            icon: <BookOpen size={20} />,
            name: 'Higher Secondary',
            stream: 'PCMB',
            institution: 'Alvas PU College, Moodbidri',
            yop: '2018',
            board: 'Karnataka PUC Board'
        },
        {
            id: 3,
            icon: <School size={20} />,
            name: 'Secondary',
            stream: '-',
            institution: 'ACO School, Ilkal',
            yop: '2016',
            board: 'KSEEB'
        }
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="section-header">
                        <GraduationCap size={32} className="section-icon" />
                        <h2>Education</h2>
                    </div>

                    <div className="education-table">
                        <div className="table-header">
                            <div className="header-cell name-col">Name</div>
                            <div className="header-cell stream-col">Stream</div>
                            <div className="header-cell institution-col">College/School</div>
                            <div className="header-cell yop-col">YOP</div>
                            <div className="header-cell board-col">Board</div>
                        </div>

                        <div className="table-body">
                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    className="table-row"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="table-cell name-col">
                                        <span className="cell-icon">{edu.icon}</span>
                                        <span className="cell-text">{edu.name}</span>
                                    </div>
                                    <div className="table-cell stream-col">{edu.stream}</div>
                                    <div className="table-cell institution-col">{edu.institution}</div>
                                    <div className="table-cell yop-col">{edu.yop}</div>
                                    <div className="table-cell board-col">{edu.board}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
