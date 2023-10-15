import React from 'react'
import Skeleton from 'react-loading-skeleton'
const SearchSkeleton = () => {
    return (
        <div className='w-full flex gap-2 mt-5'>
            <div className='h-full w-full aspect-[3/4] flex flex-col gap-1'>
                <Skeleton className='aspect-[3/4] h-full w-full' />
                <Skeleton className='' />
            </div>
            <div className='h-full w-full aspect-[3/4] flex flex-col gap-1'>
                <Skeleton className='aspect-[3/4] h-full w-full' />
                <Skeleton className='' />
            </div>
            <div className='hidden h-full w-full aspect-[3/4] lg:flex flex-col gap-1'>
                <Skeleton className=' aspect-[3/4] h-full w-full' />
                <Skeleton className='' />
            </div>
            <div className='hidden h-full w-full aspect-[3/4] lg:flex flex-col gap-1'>
                <Skeleton className=' aspect-[3/4] h-full w-full' />
                <Skeleton className='' />
            </div>
            <div className='hidden h-full w-full aspect-[3/4] lg:flex flex-col gap-1'>
                <Skeleton className=' aspect-[3/4] h-full w-full' />
                <Skeleton className='' />
            </div>
        </div>
    )
}

export default SearchSkeleton