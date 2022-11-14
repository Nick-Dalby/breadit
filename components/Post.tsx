import { useMutation, useQuery } from '@apollo/client'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import { Orbit } from '@uiball/loaders'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import TimeAgo from 'react-timeago'
import { ADD_VOTE } from '../graphql/mutations'
import { GET_ALL_VOTES_BT_POST_ID } from '../graphql/queries'
import Avatar from './Avatar'

type Props = {
  post: Post
}

const Post = ({ post }: Props) => {
  const { data: session } = useSession()
  const [vote, setVote] = useState<boolean>()

  const { data, loading } = useQuery(GET_ALL_VOTES_BT_POST_ID, {
    variables: {
      post_id: post?.id,
    },
  })

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_ALL_VOTES_BT_POST_ID, 'getVotesByPostId'],
  })

  useEffect(() => {
    const votes: Vote[] = data?.getVotesByPostId

    const vote = votes?.find(
      (vote) => vote.username === session?.user?.name
    )?.upvote

    setVote(vote)
  }, [data])

  const upVote = async (isUpvote: boolean) => {
    if (!session) {
      toast('🚩 Sign in to vote!')
      return
    }

    if (vote && isUpvote) return
    if (vote === false && !isUpvote) return

    console.log('voting: ', isUpvote)

    await addVote({
      variables: {
        post_id: post.id,
        username: session.user?.name,
        upvote: isUpvote,
      },
    })
  }

  const displayVotes = (data: any) => {
    const votes: Vote[] = data?.getVotesByPostId
    const displayNumber = votes?.reduce((total, vote) => vote.upvote ? (total += 1) : (total -= 1), 0)

    if (votes?.length === 0 ) return 0

    if (displayNumber === 0) {
      return votes[0]?.upvote ? 1 : -1
    }

    return displayNumber
  }

  //adding a loading state, remove if implementing SSR?
  if (!post)
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Orbit size={50} color="#ff4520" />
      </div>
    )

  return (
    <Link href={`/post/${post.id}`} legacyBehavior>
      <div className=" flex cursor-pointer rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
        {/* upvotes */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-lg bg-white p-4 text-gray-400">
          <ArrowUpIcon
            onClick={(e) => {
              e.stopPropagation()
              upVote(true)
            }}
            className={`voteBtn hover:text-red-400 ${vote && 'text-red-400'}`}
          />
          <p className={`text-xs font-bold text-black`}>{displayVotes(data)}</p>
          <ArrowDownIcon
            onClick={(e) => {
              e.stopPropagation()
              upVote(false)
            }}
            className={`voteBtn hover:text-blue-400 ${
              vote === false && 'text-blue-400'
            }`}
          />
        </div>

        <div className="p-3  pb-1 ">
          {/* header */}
          <div className="flex items-start space-x-2">
            <Avatar seed={post.subbread[0]?.filling} />
            <p className="text-xs lowercase text-gray-400">
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
              <ChatBubbleLeftIcon className="h-5 w-5" />
              <p className="">
                {post.comments.length}{' '}
                {post.comments.length === 1 ? 'Comment' : 'Comments'}
              </p>
            </div>
            <div className="postBtns">
              <GiftIcon className="h-5 w-5" />
              <p className="hidden sm:inline">Award</p>
            </div>
            <div className="postBtns">
              <ShareIcon className="h-5 w-5" />
              <p className="hidden sm:inline">Share</p>
            </div>
            <div className="postBtns">
              <BookmarkIcon className="h-5 w-5" />
              <p className="hidden sm:inline">Save</p>
            </div>
            <div className="postBtns">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Post
