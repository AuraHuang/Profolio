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
      <div className={`flex flex-between px-5 py-3 mb-3 rounded shadow-md bg-gray-100 ${isShow && 'cursor-pointer'}`} onClick={handleClick}>
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
          <ul className=' text-sm rounded border transition-all delay-150 duration-300 before:h-0 after:h-full'>
            {
              value?.map((item) => (
                <li key={item} className=' px-5 py-3 border-b'>{ item }</li>
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