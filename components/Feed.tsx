/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_FILLING } from '../graphql/queries'
import Post from './Post'

type Props = {
  filling?: string
}

const Feed = ({ filling }: Props) => {
  const { data, error } = !filling
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_FILLING, {
        variables: {
          filling: filling,
        },
      })

  const posts: Post[] = !filling
    ? data?.getPostList
    : data?.getPostListByFilling

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export default Feed
