import Head from 'next/head'
import Link from 'next/link'
import BlogLayout from '../components/blog-layout'

export default function FirstPost() {
  return (
    <BlogLayout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </BlogLayout>
  )
}