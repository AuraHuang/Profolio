import React from 'react'
import { SectionTitleProps } from '../types'

const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <div className='flex-between text-lg font-semibold mb-5'>
        <span className=' px-5 py-3 text-center rounded bg-gray-200'>{ title }</span>
        <span className=' flex-1 w-full border'></span>
    </div>
  )
}

export default SectionTitle