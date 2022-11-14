import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import Post from "../../components/Post"
import { GET_POST_BY_POST_ID } from '../../graphql/queries'

const PostPage = () => {
  const router = useRouter()

  // could do this server side, but for now this works
  const { loading, error, data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postId
    }
  })

  const post: Post = data?.getPostByPostId

  

  return (
    <div>
      <Post post={post}/>
    </div>
  )
}
export default PostPage