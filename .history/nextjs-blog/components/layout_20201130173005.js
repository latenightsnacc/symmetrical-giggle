import styles from './layout.module.css'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Welcome to Mood Blogs'

export default function Layout({children, home})
 {
 return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href='/favicon.ico' />
            <meta 
                name="description"
                content="Welcome! Fate willed this visit. Behold, this is a blogging platform called MoodBlogs"
            />
            <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <img
                    src="/images/profile.jpg"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                </>
                )
            }
        </header>
        {children}</div>
 )
 }