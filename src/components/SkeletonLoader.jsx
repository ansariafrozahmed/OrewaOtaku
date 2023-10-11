import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonLoader = () => {
    return (
        <div className='w-full flex gap-2'>
            <div className='w-[50%] lg:w-[16%] flex flex-col gap-1'>
                <Skeleton className='h-[250px] lg:h-[320px]' />
                <Skeleton className='h-[25px] ' count={2} />
            </div>
            <div className='w-[50%] lg:w-[16%] flex flex-col gap-1'>
                <Skeleton className='h-[250px] lg:h-[320px]' />
                <Skeleton className='h-[25px] ' count={2} />
            </div>
            <div className='hidden lg:w-[16%] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' count={2} />
            </div>
            <div className='hidden lg:w-[16%] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' count={2} />
            </div>
            <div className='hidden lg:w-[16%] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' count={2} />
            </div>
            <div className='hidden lg:w-[16%] lg:flex flex-col gap-1'>
                <Skeleton className=' lg:h-[320px]' />
                <Skeleton className='h-[25px] ' count={2} />
            </div>
        </div>
    )
}

export default SkeletonLoader