import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed top-0 w-full bg-white shadow shadow-slate-200 z-10'>
      <div className=' container max-w-screen-lg mx-auto flex-between py-4'>
        <span className=' title'>黃儀婷 | 前端工程師</span>
        <span className=' font-semibold'>
          <span className='nav-item border-black text-black'>技能簡介</span>
          <span className='nav-item border-gray-300 text-gray-500'>相關經歷</span>
          <span className='nav-item border-gray-300 text-gray-500'>自傳</span>
        </span>
      </div>
    </div>
  )
}

export default Navbar