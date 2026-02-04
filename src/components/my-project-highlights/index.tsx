import React from 'react';
import styles from './my-project-highlights.module.css';

export default function MyProjectHighlights(): JSX.Element {
  return (
    <section className={styles.projects}>
      <h2>My Project Highlights</h2>
      <ul>
        <li>Project A</li>
        <li>Project B</li>
        <li>Project C</li>
      </ul>
    </section>
  );
}
