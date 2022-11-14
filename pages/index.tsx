import { useQuery } from '@apollo/client'
import Head from 'next/head'
import Feed from '../components/Feed'
import PostInput from '../components/PostInput'
import SubbreadRow from '../components/SubbreadRow'
import { GET_SUBBREADS_WITH_LIMIT } from '../graphql/queries'

export default function Home() {
  const { data } = useQuery(GET_SUBBREADS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  })
  const subbreads: Subbread[] = data?.getSubbreadListLimit

  return (
    <div className="my-7 mx-auto max-w-4xl ">
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

      <div className="flex">
        {/* feed */}
        <Feed />

        <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-lg border border-gray-300 bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div>
            {/* list 10 subbreads */}
            {subbreads?.map((subbread, i) => (
              <SubbreadRow key={subbread.id} filling={subbread.filling} index={i}/>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}
