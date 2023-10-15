import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonLoader = () => {
    return (
        <div className='w-full flex gap-2'>
            <div className='h-full w-full aspect-[3/4] flex flex-col gap-1'>
                <Skeleton className='h-[250px] lg:h-[320px]' />
                <Skeleton className='h-[25px] ' />
            </div>
            <div className='h-full w-full aspect-[3/4] flex flex-col gap-1'>
                <Skeleton className='h-[250px] lg:h-[320px]' />
                <Skeleton className='h-[25px] ' />
            </div>
            <div className='hidden h-full w-full aspect-[3/4] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' />
            </div>
            <div className='hidden h-full w-full aspect-[3/4] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' />
            </div>
            <div className='hidden h-full w-full aspect-[3/4] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' />
            </div>
            <div className='hidden h-full w-full aspect-[3/4] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' />
            </div>
        </div>
    )
}

export default SkeletonLoader