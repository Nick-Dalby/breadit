import { useSession } from 'next-auth/react'
import Image from 'next/image'

type Props = {
  seed?: string
  large?: boolean
}

const Avatar = ({seed, large}: Props) => {
  const { data: session } = useSession()

  return (
    <div className={`relative overflow-hidden h-10 w-10 rounded-full border-gray-300 bg-white ${large && 'h-20 w-20'}`}>
      <Image fill src={`https://avatars.dicebear.com/api/bottts/${seed || session?.user?.name || 'placeholder'}.svg`} alt='avatar'/>
    </div>
  )
}
export default Avatar
