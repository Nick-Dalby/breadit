import { LinkIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Avatar from './Avatar'

type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subbread: string
}

const PostInput = () => {
  const { data: session } = useSession()
  const [imageBoxOpen, setImageBoxOpen] = useState(false)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
    
  })

  return (
    <form onSubmit={onSubmit} className="sticky top-16 z-50 rounded-3xl border border-gray-300 bg-white py-2 px-4 ">
      <div className="flex items-center space-x-3">
        {/* avatar */}
        <Avatar />

        <input
          {...register('postTitle', { required: true })}
          className="flex-1 rounded-full bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          type="text"
          placeholder={session ? 'Create post' : 'Sign in to create a post'}
        />
        <PhotoIcon
          className={`h-6 cursor-pointer text-gray-300 ${imageBoxOpen && 'text-blue-300'}`}
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
        />
        <LinkIcon className={`h-6 cursor-pointer text-gray-300`} />
      </div>

      {!!watch('postTitle') && (
        <div className="flex flex-col py-2">
          {/* body */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              className="m-2 flex-1 rounded-lg bg-blue-50 p-3 outline-none"
              {...register('postBody')}
              type="text"
              placeholder="Text (optional)"
            />
          </div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subbread:</p>
            <input
              className="m-2 flex-1 rounded-lg bg-blue-50 p-3 outline-none"
              {...register('subbread', { required: true })}
              type="text"
              placeholder="eg: CroissantCrew"
            />
          </div>

          {imageBoxOpen && (
            <div className="flex items-center px-2">
            <p className="min-w-[90px]">Image URL:</p>
            <input
              className="m-2 flex-1 rounded-lg bg-blue-50 p-3 outline-none"
              {...register('postImage')}
              type="text"
              placeholder="optional..."
            />
          </div>
          )}

          {/* errors */}

          {Object.keys(errors).length > 0 && (
            <div className='space-y-2 p-2 text-red-500'>
              {errors.postTitle?.type === 'required' && (
                <p>A post title is required!</p>
              )}
               {errors.subbread?.type === 'required' && (
                <p>A Subbread is required!</p>
              )}
            </div>
          )}

        {!!watch('postTitle') && (
          <button type='submit' className='w-full rounded-full bg-orange-500 p-2 text-white'>Create Post</button>
        )}
        </div>
      )}
    </form>
  )
}
export default PostInput
