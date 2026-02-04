import React from 'react';
import styles from './hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <h1>Hero Section</h1>
      <p>Welcome to my portfolio!</p>
    </section>
  );
}
