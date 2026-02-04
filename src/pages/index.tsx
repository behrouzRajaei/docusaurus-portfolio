import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import MySkills from '../components/my-skills';
import MyProjectHighlights from '../components/my-project-highlights';
import Contact from '../components/contact';
import Footer from '../components/footer';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout title="Portfolio">
      <Header />
      <Hero />
      <MySkills />
      <MyProjectHighlights />
      <Contact />
      <Footer />
      <main>
        {/* سایر بخش‌ها بعداً اضافه می‌شوند */}
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
