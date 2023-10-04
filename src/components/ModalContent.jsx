import React from 'react'

const ModalContent = ({ image, name }) => {
  return (
    <div>
      <div className='lg:flex gap-6'>
        <div>
          <img src={image} alt={name} className='lg:h-[330px] w-full shadow-lg shadow-black' />
        </div>
        <div>
          <h1 className='text-2xl'>{name}</h1>
        </div>
      </div>
    </div>
  )
}

export default ModalContent