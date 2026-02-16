import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import CommunityMeetings from './CommunityMeetings.mdx';   // your MDX content

import LatestRelease from '@site/src/data/releases/latest.json'; // ← static import!

import Intro from './intro.mdx';

import styles from './styles.module.css';

import Link from '@docusaurus/Link'; // 2026-02-14 Saturday 12:19:40. Use <Link> for internal links.

export default function HomepageContent() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <main className={styles.mainContent}>
            {/* Intro Section */}
            <section className={styles.sectionContainer}>
                {/* <header className={styles.sectionHeader}>
          <h1>Welcome to PURL</h1>
          <p>Documentation and community hub for PURL and VERS.</p>
        </header> */}
                <div className={styles.sectionIntro}>
                    <Intro />
                </div>
            </section>

            {/* Community Info Section */}
            <section
                className={styles.sectionContainer}
                aria-labelledby='community-meetings'
            >
                <div className={styles.generalInfoWrapper}>
                    <div className={styles.twoColumn}>
                        {/* Column 1 */}
                        <article
                            className={styles.column}
                            id='community-meetings'
                        >
                            <h2>Heading 1</h2>
                            <div className={styles.card}>
                                {/* <CommunityMeetings /> */}
                                Blah blah blah.
                            </div>
                            <div className={styles.card}>
                                {/* <CommunityMeetings /> */}
                                And furthermore . . . .
                            </div>
                        </article>

                        {/* Column 2 – placeholder for future content */}
                        <aside className={styles.column}>
                            <h2>Quick Links</h2>
                            <ul>
                                <li>
                                    <Link to='/docs/about/about-latest-releases'>
                                        About -- Latest releases
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/releases'>Repo A Latest Releases</Link>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Latest Release Widget */}
            <section
                className={styles.sectionContainer}
                aria-labelledby='latest-release'
            >
                <div className={styles.releaseCard}>
                    <header>
                        <h2 id='latest-release'>Latest Release</h2>
                        <span className={styles.releaseBadge}>
                            v{LatestRelease.version}
                        </span>
                    </header>
                    <p className={styles.releaseDate}>
                        Released on{' '}
                        {new Date(
                            LatestRelease.published_at,
                        ).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                    <div className={styles.releaseBody}>
                        {/* Render markdown-like body safely – for full markdown use remark */}
                        <p>
                            {LatestRelease.body.split('\n')[0] ||
                                'No description provided.'}
                        </p>
                        {LatestRelease.body.split('\n').length > 1 && (
                            <p>
                                <em>…and more. </em>
                                <a
                                    href={LatestRelease.html_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    View full release notes →
                                </a>
                            </p>
                        )}
                    </div>
                    <a
                        href={LatestRelease.html_url}
                        className={styles.releaseButton}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        View on GitHub
                    </a>
                </div>
            </section>
        </main>
    );
}
