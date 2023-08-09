import React, { useEffect, useState } from 'react'
import { OptionsProps } from '../types'
import { MdOutlineAdd, MdOutlineRemove } from 'react-icons/md'

const Collapse = ({title, value, isAllOpen}: OptionsProps) => {
  const [isOpen, setIsOpen] = useState(isAllOpen)
  const isShow = (value.length > 0? true : false)

  useEffect(() => {
    setIsOpen(isAllOpen)
  },[isAllOpen])

  const handleClick = () => {
    if(!isShow){
      return;
    }
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex-1'>
      <div className={`flex flex-between px-5 py-3 mb-5 card-style dark:text-black bg-gray-200 ${isShow && 'cursor-pointer'}`} onClick={handleClick}>
        <span>{ title }</span>
        {
          isShow && (
            isOpen === false ? (
              <span><MdOutlineAdd /></span>
            )
            :
            (
              <span><MdOutlineRemove /></span>
            )
          )

        }
        
      </div>
      { 
        isOpen && isShow ?
        (
          <ul className=' text-sm  card-style transition-all delay-150 duration-300 before:h-0 after:h-full'>
            {
              value?.map((item) => (
                <li key={item} className=' px-5 py-3 border-bottom-style'>{ item }</li>
              ))
            }
          </ul>
        )
        :
        (
          <></>
        )
      }
    </div>
  )
}

export default Collapse