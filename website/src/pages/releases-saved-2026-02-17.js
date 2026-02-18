import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './releases.module.css';

export default function ReleasesPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/releases.json')
            .then((res) => res.json())
            .then((json) => {
                // Ensure newest-first sort
                json.releases.sort(
                    (a, b) =>
                        new Date(b.published_at) - new Date(a.published_at),
                );
                setData(json);
            });
    }, []);

    if (!data) {
        return (
            <Layout title='Releases'>
                <div className='container margin-vert--lg'>
                    <p>Loading releases...</p>
                </div>
            </Layout>
        );
    }

    const formatUTC = (isoString) => {
        const d = new Date(isoString);
        return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
            2,
            '0',
        )}-${String(d.getUTCDate()).padStart(2, '0')} ${String(
            d.getUTCHours(),
        ).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')} UTC`;
    };

    const truncate = (text, max = 160) =>
        text && text.length > max ? text.slice(0, max) + '…' : text;

    return (
        <Layout title='Releases'>
            <div className={`container margin-vert--lg ${styles.container}`}>
                <h1>Repository Releases</h1>

                <div className={styles.generated}>
                    Generated: {formatUTC(data.generated_at)}
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Repository</th>
                            <th className={styles.th}>Tag</th>
                            <th className={styles.th}>Published (UTC)</th>
                            {/* <th className={styles.th}>Notes</th> */}
                            <th
                                className={`${styles.th} ${styles.notesColumn}`}
                            >
                                Notes
                            </th>
                            <th className={styles.th}>Commits Since</th>
                            <th className={styles.th}>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.releases.map((release, index) => (
                            <tr key={index}>
                                <td className={`${styles.td} ${styles.repo}`}>
                                    <a
                                        href={release.repo_url}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {release.repo}
                                    </a>
                                </td>

                                <td className={`${styles.td} ${styles.tag}`}>
                                    <a
                                        href={release.tag_url}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {release.tag}
                                    </a>
                                </td>

                                <td className={styles.td}>
                                    {formatUTC(release.published_at)}
                                </td>

                                {/* <td className={styles.td}> */}
                                <td className={`${styles.td} ${styles.notesColumn}`}>
                                    <span className={styles.body}>
                                        {truncate(release.body)}
                                    </span>
                                </td>

                                <td className={styles.td}>
                                    <a
                                        href={release.compare_url}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {release.commits_since}
                                    </a>
                                </td>

                                <td className={`${styles.td} ${styles.links}`}>
                                    <a
                                        href={release.releases_page_url}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Releases
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
