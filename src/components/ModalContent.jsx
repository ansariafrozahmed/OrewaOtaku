import React from 'react'

const ModalContent = ({ image, name }) => {
  return (
    <div className=''>
      <div className='flex w-full gap-5'>
        <div className='w-[50%] lg:w-auto'>
          <img src={image} alt={name} className='h-[200px] lg:h-[320px] w-full shadow-lg shadow-black' />
        </div>
        <div className='w-[50%] lg:w-[60%]'>
          <h1 className='text-[1rem] font-medium lg:text-[1.5rem]'>{name}</h1>
          <p>TV</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium doloribus esse veritatis libero magnam quis quos voluptas eaque accusamus! Sequi perferendis a voluptate aspernatur doloribus rem. Ad temporibus natus excepturi.</p>
        </div>
      </div>
    </div>
  )
}

export default ModalContent