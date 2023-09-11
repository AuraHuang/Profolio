import React, { useState } from 'react'
import { CardProps } from '../types'
import ImgSlider from './ImgSlider'
import { MdOutlineLink } from 'react-icons/md'

const CardDetail = ({data}: CardProps) => {
  const { type, title, link, src, img, desc } = data
  const [isOpen, setIsOpen] = useState(false)  

  return (
    <>
      <div className={` flex-center flex-col lg:flex-row mb-5 card-style ${type === "row"? "" : "lg:px-5"}`}>
        <div className={` w-full p-5 rounded overflow-hidden lg:w-[40%] cursor-pointer shadow-lg ${src? "" : "hidden"}`} onClick={() => setIsOpen(true)}>
          <img 
            src={ `${ src }/1.png` } 
            alt={ title }
          />
        </div>
        <div className={`flex-1 ${type === "row"? "flex flex-col items-center md:flex-row w-full" : ""}`}>
          <div className={` flex-center-row font-semibold w-full px-5 ${type === "row"? " md:w-auto py-5 border-bottom-style md:border-b-0" : "py-5 border-bottom-style"}`}>
            <span className={`${type === "row"? "" : "mr-3"}`}>{ title }</span>
            {
              link &&
              <a href={link} target='blank' className=' duration-300 hover:text-slate-500' ><MdOutlineLink /></a>
            }
          </div>
          <ul className={` text-sm leading-6 list-disc p-5 ${type === "row"? "pl-9 md:border-l" : "ms-4"}`}>
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