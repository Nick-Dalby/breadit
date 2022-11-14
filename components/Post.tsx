import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import TimeAgo from 'react-timeago'
import Avatar from './Avatar'
import { Orbit } from '@uiball/loaders'

type Props = {
  post: Post
}

const Post = ({ post }: Props) => {
  
  //adding a loading state, remove if implementing SSR?
  if (!post) return (
    <div className='flex w-full items-center justify-center p-10 text-xl'>
      <Orbit size={50} color='#ff4520' />
    </div>
  )

  return (
    <Link href={`/post/${post.id}`} legacyBehavior>
      <div className=" flex cursor-pointer rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
        {/* upvotes */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-lg bg-white p-4 text-gray-400">
          <ArrowUpIcon className="voteBtn hover:text-red-400" />
          <p className="text-xs font-bold text-black">0</p>
          <ArrowDownIcon className="voteBtn hover:text-blue-400" />
        </div>

        <div className="p-3  pb-1 ">
          {/* header */}
          <div className="flex items-start space-x-2">
            <Avatar seed={post.subbread[0]?.filling} />
            <p className="text-xs text-gray-400">
              <Link href={`/subbread/${post.subbread[0]?.filling}`}>
                <span className="font-bold text-black hover:text-blue-500 hover:underline">
                  br/{post.subbread[0]?.filling}
                </span>
              </Link>
              • Posted by u/{post.username} <TimeAgo date={post.created_at} />
            </p>
          </div>

          {/* body */}
          <div className="py-4 ">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>
          </div>

          {/* image */}
          <img src={post.image} alt="" className="w-full rounded-lg" />

          {/* footer */}
          <div className="mt-4 flex space-x-4 text-gray-400">
            <div className="postBtns">
              <ChatBubbleLeftIcon className="h-6 w-6" />
              <p className="">
                {post.comments.length}{' '}
                {post.comments.length === 1 ? 'Comment' : 'Comments'}
              </p>
            </div>
            <div className="postBtns">
              <GiftIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Award</p>
            </div>
            <div className="postBtns">
              <ShareIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Share</p>
            </div>
            <div className="postBtns">
              <BookmarkIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Save</p>
            </div>
            <div className="postBtns">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Post
