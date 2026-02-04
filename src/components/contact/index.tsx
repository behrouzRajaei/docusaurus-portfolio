import React from 'react';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
    </section>
  );
}
