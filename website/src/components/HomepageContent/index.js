import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeIntro from './HomeIntro.mdx';




import styles from './styles.module.css';

export default function HomepageContent() {
    // Get baseUrl from Docusaurus context
    const { siteConfig } = useDocusaurusContext();
    const { baseUrl } = siteConfig;

    return (
        <main>
            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >

                </div>
                <div className={styles.sectionIntro}>
                    <HomeIntro />
                </div>
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

            {/* temp dummy div to create space above footer */}
            <div style={{ marginBottom: '50px' }}></div>
        </main>
    );
}
