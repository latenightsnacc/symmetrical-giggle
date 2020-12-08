import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title> {siteTitle} </title>
      </Head>
      <section className={utilStyles.headingmd}>
        <p>Hello, I am Buchi. A front-end developer and a food addict.
          You can contact me in your dreams @latenitesnacc.
        </p>
        <p>
          Welcome to Mood Blogs. Feel free to look around and get familiar.
          When the mood strikes, poor your soul in here.
        </p>
      </section>
    </Layout>
    
  )
}