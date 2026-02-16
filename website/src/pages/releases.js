import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './releases.module.css';

// 2026-02-15 Sunday 19:21:13.  Fix the baseUrl issue
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Releases() {
    const [data, setData] = useState(null);

    //   useEffect(() => {
    //     fetch('/releases.json')
    //       .then(res => res.json())
    //       .then(setData);
    //   }, []);

    //   2026-02-15 Sunday 19:23:27.
    const releasesUrl = useBaseUrl('/releases.json');

    useEffect(() => {
        fetch(releasesUrl)
            .then((res) => res.json())
            .then(setData);
    }, [releasesUrl]);

    if (!data)
        return (
            <Layout>
                <p>Loading releases...</p>
            </Layout>
        );

    // Sort newest first
    const repos = Object.entries(data).sort(
        (a, b) => new Date(b[1].published_at) - new Date(a[1].published_at),
    );

    return (
        <Layout title='Latest Releases'>
            <div className={styles.container}>
                <h1>Latest Releases</h1>

                {repos.map(([repo, info]) => (
                    <div key={repo} className={styles.card}>
                        <div className={styles.header}>
                            <h2>{repo}</h2>
                            {info.prerelease && (
                                <span className={styles.badge}>Prerelease</span>
                            )}
                        </div>

                        <a href={info.url} className={styles.tag}>
                            {info.tag}
                        </a>

                        <p className={styles.date}>
                            Published:{' '}
                            {new Date(info.published_at).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
