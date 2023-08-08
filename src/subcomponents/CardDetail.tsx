import React, { useState } from 'react'
import { CardProps } from '../types'
import ImgSlider from './ImgSlider'

const CardDetail = ({data}: CardProps) => {
  const { name, src, img, desc } = data
  const [isOpen, setIsOpen] = useState(false)  

  return (
    <>
      <div className=' flex-center flex-col items-center mb-5 rounded border shadow-md lg:flex-row lg:p-5'>
          <div className=' w-full mb-5 rounded overflow-hidden lg:w-[40%] cursor-pointer shadow-lg' onClick={() => setIsOpen(true)}>
            <img 
              src={ `${ src }/1.png` } 
              alt={ name }
            />
          </div>
          <div className='flex-1'>
            <div className=' font-semibold mb-3 px-5'>
              { name }
            </div>
            <ul className=' text-sm leading-6 list-disc ms-4 px-5 pb-5'>
                {
                  desc?.map((item,i) => (
                    <li key={i}>{ item }</li>
                  ))
                }
            </ul>
          </div>
      </div>
      { isOpen && <ImgSlider name={name} src={src} img={img} setIsOpen={() => (setIsOpen(false))}/> }
    </>
  )
}

export default CardDetail