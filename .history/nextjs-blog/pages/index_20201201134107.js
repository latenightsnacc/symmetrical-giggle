import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllPostIds} from '../lib/posts'


export default function Home({ postTitle}) {
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
        <Link href="/posts/first-post">
            <a>Read blog here.</a>
        </Link>
      </section>
      <section className={`${utilStyles.headingmd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headinglg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postTitle.map(({ id}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    
  )
}

export async function getStaticProps( {params}) {
  const postTitle = getAllPostIds(params.id)
  return {
      props: {
          postTitle
      }
  }
}
