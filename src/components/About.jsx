import React from 'react';
import styles from './About.module.css';
import ProfileCard from './ProfileCard';

const About = () => {
  const temporaryText = `
    I am a passionate and dedicated Computer Science Engineering student with a strong foundation in data structures, algorithms, and software development. My journey in tech has been driven by a curiosity to build innovative solutions and a commitment to writing clean, efficient, and maintainable code.

    My coursework and personal projects have equipped me with skills in both front-end and back-end technologies. I am always eager to learn and take on new challenges. I believe in continuous improvement and strive to create impactful applications that solve real-world problems.
  `;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.profileCardWrapper}>
          <ProfileCard
            name="Diya Mamoria"
            title="B.Tech CSE Student"
            handle="diyamamoria"
            status="Online"
            contactText="Connect"
            avatarUrl="../../full.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
        <div className={styles.aboutMeText}>
          <h2 className={styles.heading}>About Me</h2>
          <p>{temporaryText}</p>
        </div>
      </div>
    </section>
  );
};

export default About;