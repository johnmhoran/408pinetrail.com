import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeIntro from './HomeIntro.mdx';

import styles from './styles.module.css';

export default function HomepageContent() {
    // Get baseUrl from Docusaurus context
    const { siteConfig } = useDocusaurusContext();
    const { baseUrl } = siteConfig;

    return (
        // <main>
        <main className={styles.mainContent}>
            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >

                </div>
                <div className={styles.sectionIntro}>
                    <HomeIntro />
                </div>

{/* Debug line — remove later */}
      <div style={{ background: '#ffeb3b', padding: '8px', margin: '1rem 0', border: '2px solid red' }}>
        <strong>Debug: siteConfig.title = </strong> {siteConfig.title || '(not found)'}
        <br />
        <strong>siteConfig.url = </strong> {siteConfig.url || '(not found)'}
      </div>

      {/* Your normal content here */}

            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >

                    <h1>Some message?</h1>
                </div>
                <div>This is /components/HomepageContent/index.js.</div>

                {/* <div className={styles.sectionIntro}>
                    <ProjectOverview />
                </div> */}

                {/* <ProjectGridTemplate /> */}
            </section>

            {/* <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '30px' }}
                >
                    <h1>Supporters</h1>
                </div>
                <div className={styles.sectionIntro}>
                    <Supporters />
                </div>
                <SupporterGrid />
            </section> */}

      <section className={styles.sectionContainer}>
        <header className={styles.sectionHeader}>
          <h1>Welcome to PURL</h1>
          <p>Documentation and community hub for PURL and VERS.</p>
        </header>
        <div className={styles.sectionIntro}>
          {/* If you have intro MDX */}
        </div>
      </section>

            {/* temp dummy div to create space above footer */}
            <div style={{ marginBottom: '50px' }}></div>
        </main>
    );
}
