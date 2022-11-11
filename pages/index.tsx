import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Breadit</title>
        <meta name="description" content="The worlds best bread community!" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍞</text></svg>"
        ></link>
      </Head>

      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  )
}