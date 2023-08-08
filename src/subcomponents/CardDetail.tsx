import React, { useState } from 'react'
import { CardProps } from '../types'
import ImgSlider from './ImgSlider'

const CardDetail = ({data}: CardProps) => {
  const { type, title, src, img, desc } = data
  const [isOpen, setIsOpen] = useState(false)  

  return (
    <>
      <div className={` flex-center flex-col  lg:flex-row mb-5 card-style ${type === "row"? "" : "lg:px-5"}`}>
        <div className={` w-full rounded overflow-hidden lg:w-[40%] cursor-pointer shadow-lg ${src? "" : "hidden"}`} onClick={() => setIsOpen(true)}>
          <img 
            src={ `${ src }/1.png` } 
            alt={ title }
          />
        </div>
        <div className={`flex-1 ${type === "row"? "flex items-center w-full" : ""}`}>
          <div className={` font-semibold px-5 ${type === "row"? "" : "py-5 border-bottom-style"}`}>
            { title }
          </div>
          <ul className={` text-sm leading-6 list-disc p-5 ${type === "row"? "pl-9 border-left-style" : "ms-4"}`}>
              {
                desc?.map((item,i) => (
                  <li key={i}>{ item }</li>
                ))
              }
          </ul>
        </div>
      </div>
      { isOpen && <ImgSlider title={title} src={src} img={img} setIsOpen={() => (setIsOpen(false))}/> }
    </>
  )
}

export default CardDetail