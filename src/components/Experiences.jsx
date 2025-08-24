import React from 'react';
import styles from './Experiences.module.css';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    id: 1,
    title: 'Software Engineering (SWE) Intern',
    company: 'Microsoft India (R&D) Pvt. Ltd.',
    duration: 'May 2025 - July 2025',
    description: 'Worked on Azure Reliability Team developing health monitoring and synthetic frameworks for improving service reliability and availability.',
    achievements: [
      'Developed and integrated health monitoring tools for critical Azure services as part of the Watchdog framework.',
      'Contributed robust synthetic code simulating real-world service transactions, enabling early detection of failures in availability, performance, and functionality.',
      'Automated scenario-based unit testing to ensure system reliability and proactively identify potential issues before deployment.',
    ],
    technologies: ['C#', 'PowerShell', 'Microsoft Azure', 'Git', 'dSTS Authentication', 'Visual Studio', 'Geneva Monitoring'],
  },
  {
    id: 2,
    title: 'Research Intern',
    company: 'Samsung PRISM',
    duration: 'Sep 2024 - Apr 2025',
    description: 'Conducted advanced R&D on generative AI techniques for on-device object addition and augmentation using diffusion models.',
    achievements: [
      'Developed novel methodologies for real-time object recognition and augmentation using diffusion models and generative techniques.',
      'Optimized model performance through compression, quantization, and other methods for efficient real-time inference on edge devices.',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Diffusion Models', 'Jupyter Notebook'],
  },
  {
    id: 3,
    title: 'Machine Learning (ML) Intern',
    company: 'Innovana Thinklabs Ltd.',
    duration: 'May 2024 - July 2024',
    description: 'Worked on ML solutions to enhance predictive analytics for user behavior and engagement in software products.',
    achievements: [
      'Developed and optimized machine learning models for predictive analytics, improving product performance.',
      'Conducted data preprocessing, feature engineering, and evaluated multiple ML algorithms for production readiness.',
    ],
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'Keras', 'GitHub', 'Jupyter Notebook'],
  },
];


const Experiences = () => {
  return (
    <section id="experiences" className={styles.experiences}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <ExperienceCard {...exp} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;