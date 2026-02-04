import React from 'react';
import styles from './my-skills.module.css';

export default function MySkills(): JSX.Element {
  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Docusaurus</li>
      </ul>
    </section>
  );
}
