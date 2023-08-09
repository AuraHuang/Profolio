import React from 'react'
import { NavItem } from '../subcomponents'
import { scrollTo } from '../utils/scroll'

const Navbar = () => {

  return (
    <div className=' fixed top-0 w-full bg-white dark:bg-slate-800 shadow shadow-slate-200 z-10'>
      <div className=' container  max-w-screen-lg mx-auto py-4 flex flex-col items-center sm:flex-row sm:justify-between'>
        <span className=' title mb-5 sm:mb-0'><a href="/">黃儀婷 | 前端工程師</a></span>
        <span className=' font-semibold'>
          <NavItem title={"技能簡介"} scrollTo={() => scrollTo({id: "skill"})} />
          <NavItem title={"相關經歷"} scrollTo={() => scrollTo({id: "experience"})} />
          <NavItem title={"自傳"} scrollTo={() => scrollTo({id: "introduction"})} />
        </span>
      </div>
    </div>
  )
}

export default Navbar