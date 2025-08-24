import React from 'react';
import styles from './Hero.module.css';
import LightRays from './LightRays';

const Hero = ({ theme }) => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Diya Mamoria</h1>
        <p className={styles.heroSubtitle}>
          I'm a final-year B.Tech CSE student specializing in Full Stack Web Development.
        </p>
      </div>
      {theme === 'dark' && (
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      )}
    </section>
  );
};

export default Hero;