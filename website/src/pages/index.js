import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';
// import HomepageContent from '../components/HomepageContent';
import HomepageContent_2026_02_13 from '../components/HomepageContent-2026-02-13';

// 2026-02-14 Saturday 13:35:36.
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Link from '@docusaurus/Link';
// import styles from './index.module.css';

export default function Home() {
    // 2026-02-14 Saturday 13:36:03.add this | 2026-02-15 Sunday 11:29:18.  I think I decided not to use this approach for the footer.
    // const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title='Home'
            description='Landing page for 408pinetrail.com'
        >
            <HomepageHeader />
            {/* <HomepageContent /> */}
            <HomepageContent_2026_02_13 />

            {/* 2026-02-15 Sunday 10:40:44.  Debug line — remove later */}
            {/* <div
                style={{
                    background: '#ffeb3b',
                    padding: '8px',
                    margin: '1rem 0',
                    border: '2px solid red',
                }}
            >
                <strong>Debug: siteConfig.title = </strong>{' '}
                {siteConfig.title || '(not found)'}
                <br />
                <strong>siteConfig.url = </strong>{' '}
                {siteConfig.url || '(not found)'}
            </div> */}

            {/* Your normal content here */}
        </Layout>

        // <Layout title={siteConfig.title} description={siteConfig.tagline}>
        //     <main className={styles.main}>
        //         <div className='container'>
        //             <section className={styles.hero}>
        //                 <h1>Welcome to {siteConfig.title}</h1>
        //                 <p>{siteConfig.tagline}</p>
        //                 <Link to='/docs/intro'>Get Started</Link>
        //             </section>

        //             <HomepageHeader />
        //             <HomepageContent_2026_02_13 />
        //         </div>
        //     </main>
        // </Layout>
    );
}
