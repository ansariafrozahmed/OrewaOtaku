import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BannerSkeleton = () => {
    return (
        <div className='h-[60vh] lg:h-[80vh] w-full'>
            <Skeleton className='h-full w-full' />
        </div>
    )
}

export default BannerSkeleton