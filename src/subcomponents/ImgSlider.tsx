import React, { useState, useEffect } from 'react'
import { MdOutlineArrowLeft, MdOutlineArrowRight, MdOutlineClose } from 'react-icons/md'
import { CardDetailProps } from '../types'

const ImgSlider = ({ name, src, img, setIsOpen }: CardDetailProps) => {
  const [imgIndex, setImgIndex] = useState(1)
  const [isLeftBtnShow, setIsLeftBtnShow] = useState(true)
  const [isRightBtnShow, setIsRightBtnShow] = useState(true)

  useEffect(() => {
    const lastSlider = img
    setIsLeftBtnShow(imgIndex === 1? false : true)
    setIsRightBtnShow(imgIndex === lastSlider? false : true)
  }, [imgIndex])
  

  const handleClick = (type: string) => {
    const lastSlider = img

    if(type === "right") {
      imgIndex === lastSlider ? setImgIndex(imgIndex) : setImgIndex(imgIndex + 1)
    } else if (type === "left") {
      imgIndex === 1 ? setImgIndex(1) : setImgIndex(imgIndex - 1)
    }
  }

  return (
    <div className=' fixed top-0 left-0 w-full h-full bg-black/50 z-10 overflow-auto'>
        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-center-col w-full h-full md:w-[80%] md:h-[80%] md:rounded-md bg-white z-20'>
            <div className=' flex-between text-lg font-semibold px-10 py-5 border-b border-b-gray-300'>
                <span>作品 - { name }</span>
                <span className=' cursor-pointer' onClick={setIsOpen}><MdOutlineClose /></span>
            </div>
            <div className=' flex-1 flex-center min-h-0 h-full py-5'>
              <div className=' h-full'>
                <span className={` absolute top-[50%] left-0 translate-x-[50%] md:translate-x-[-50%] translate-y-[-50%] flex-center w-10 h-10 rounded-full bg-white border shadow-lg cursor-pointer z-30 ${isLeftBtnShow? 'visible' : 'invisible'}`} onClick={() => handleClick("left")} ><MdOutlineArrowLeft /></span>
                <img 
                  src={ `${src}/${imgIndex}.png` } 
                  alt={ name }
                  className=' max-h-full w-auto rounded-md'
                />
                <span className={` absolute top-[50%] right-0 translate-x-[-50%] md:translate-x-[50%] translate-y-[-50%] flex-center w-10 h-10 rounded-full bg-white border shadow-lg cursor-pointer z-30 ${isRightBtnShow? 'visible' : 'invisible'}`} onClick={() => handleClick("right")}  ><MdOutlineArrowRight /></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ImgSlider