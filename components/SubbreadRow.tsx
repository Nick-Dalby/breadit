import { ChevronUpIcon } from '@heroicons/react/24/outline' 
import Link from 'next/link'
import Avatar from './Avatar'
type Props = {
  filling: string
  index: number
}


const SubbreadRow = ({index, filling}: Props) => {
  return (
    <div className='flex items-center space-x-2 bg-white border-t px-4 py-2 last:rounded-b-lg'>
      <p>{index + 1}</p>
      <ChevronUpIcon className='h-4 w-4 flex-shrink-0 text-green-400' />
      <Avatar seed={`/subbread/${filling}`} />
      <p className='flex-1 truncate'>br/{filling}</p>
      <Link href={`/subbread/${filling}`}>
      <div className='cursor-pointer rounded-full bg-orange-500 px-3 text-white' >View</div>
      </Link>
    </div>
  )
}
export default SubbreadRow