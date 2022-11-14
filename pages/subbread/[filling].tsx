import { useRouter } from 'next/router'
import Avatar from '../../components/Avatar'
import Feed from '../../components/Feed'
import PostInput from '../../components/PostInput'

const Subbread = () => {
  const {
    query: { filling },
  } = useRouter()

  return (
    <div className={`h-24 bg-red-400 p-8`}>
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            <Avatar seed={filling as string} large />
          </div>

          <div className="py-2 ">
            <h1 className="text-3xl font-semibold ">
              Welcome to the r/{filling} subbread
            </h1>
            <p className="text-sm text-gray-400">r/{filling}</p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-5xl mt-8 pb-10'>
        <PostInput subbread={filling as string} />
        <Feed filling={filling as string}/>
      </div>
    </div>
  )
}
export default Subbread
