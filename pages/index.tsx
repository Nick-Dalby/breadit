import Head from 'next/head'
import PostInput from '../components/PostInput'

export default function Home() {
  return (
    <div className='max-w-4xl my-7 mx-auto '>
      <Head>
        <title>Breadit</title>
        <meta name="description" content="The worlds best bread community!" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍞</text></svg>"
        ></link>
      </Head>

    {/* post input  */}
    <PostInput />

    <div className='flex'>
      {/* feed */}
    </div>

    </div>
  )
}
