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
        </Head>
        {children}</div>
 )
 }