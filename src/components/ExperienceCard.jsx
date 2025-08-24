import React from 'react';
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  achievements,
  technologies,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.jobTitle}>{title}</h3>
      <p className={styles.company}>{company}</p>
      <span className={styles.duration}>{duration}</span>
      <p className={styles.description}>{description}</p>
      {achievements && achievements.length > 0 && (
        <div className={styles.listSection}>
          <h4 className={styles.listHeading}>Key Achievements:</h4>
          <ul className={styles.achievementList}>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      {technologies && technologies.length > 0 && (
        <div className={styles.listSection}>
          <h4 className={styles.listHeading}>Technologies Used:</h4>
          <div className={styles.techList}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;