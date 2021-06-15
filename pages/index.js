import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        {/* <title></title> */}
      </Head>
      <h1>This is index</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
