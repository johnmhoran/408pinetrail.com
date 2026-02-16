import React from 'react';
import styles from './styles.module.css';

export default function LatestReleaseWidget({release}) {
  if (!release) return null;

  const formattedDate = new Date(release.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const firstLine = release.body.split('\n')[0] || 'No description provided.';
  const hasMore = release.body.split('\n').length > 1;

  return (
    <section className={styles.sectionContainer} aria-labelledby='latest-release'>
      <div className={styles.releaseCard}>
        <header>
          <h2 id='latest-release'>Latest Release</h2>
          <span className={styles.releaseBadge}>v{release.version}</span>
        </header>
        <p className={styles.releaseDate}>Released on {formattedDate}</p>
        <div className={styles.releaseBody}>
          <p>{firstLine}</p>
          {hasMore && (
            <p>
              <em>…and more. </em>
              <a href={release.html_url} target='_blank' rel='noopener noreferrer'>
                View full release notes →
              </a>
            </p>
          )}
        </div>
        <a
          href={release.html_url}
          className={styles.releaseButton}
          target='_blank'
          rel='noopener noreferrer'
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}
