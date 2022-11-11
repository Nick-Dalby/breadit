import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDoubleDownIcon,
  GlobeEuropeAfricaIcon,
  MegaphoneIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import {
  Bars3Icon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Header = () => {
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm " >
      <div className="flex flex-shrink-0 cursor-pointer items-center space-x-2">
        <div className="relative h-10 w-10">
          <Image
            src="/breadface.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-10 w-20 hidden sm:inline-block">
          <Image
            src="/breadit.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="hidden sm:flex flex-1 items-center space-x-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Look for loaves"
          className="flex-1 bg-transparent outline-none text-sm sm:text-base"
        />
        <button type="submit" hidden></button>
      </form>

      <div className="mx-5  hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeEuropeAfricaIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border-gray-100" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-auto sm:ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* sign in/out */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src="/breadface-grey.svg"
              fill
              alt=""
              className="object-contain "
            />
          </div>
          <div className='flex-1 text-xs'>
          <p className='truncate'>{session?.user?.name}</p>
          <p className="text-gray-400">20 Karma</p>
          </div>
        
        <ChevronDoubleDownIcon className='h-5 flex-shrink-0 text-gray-400' />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src="/breadface-grey.svg"
              fill
              alt=""
              className="object-contain "
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  )
}
export default Header
