import React, { useState } from 'react'
import { ToggleSwitchProps } from '../types'

const ToggleSwitchBtn = ({isAllOpen, setIsAllOpen}: ToggleSwitchProps) => {

  return (
    <label className=' flex items-center cursor-pointer select-none text-sm mb-5'>
        <input 
            type="checkbox" 
            checked={isAllOpen}
            onChange={setIsAllOpen}
            className='sr-only'
        />
        <span>收合全部</span>
        <span className='box block h-8 w-14 mx-2 rounded-full bg-gray-200'>
            <span className={` absolute left-1 top-1 flex h-6 w-6 flex-center rounded-full bg-white shadow-lg transition ${ isAllOpen ? 'translate-x-full' : ''} `}></span>
        </span>
        <span>展開全部</span>
    </label>
  )
}

export default ToggleSwitchBtn