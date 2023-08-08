import React from 'react'
import { BsPhone, BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const Header = () => {
  return (
    <header className=' grid grid-cols-1 pt-10 lg:grid-cols-2'>
      <div className='flex-between'>
        <img 
          src={'/images/Avatar.png'} 
          alt="Avatar" 
          className=' w-36 h-36 rounded-full object-cover bg-slate-200'
        />
        <div className=' flex-1 flex-center-col h-36 px-5 lg:border-r-2'>
          <div className='title mb-3'>聯絡資訊</div>
          <div className='flex items-center mb-1'>
            <BsPhone />
            <span className=' ml-2'>(+886) 963720990</span>
          </div>
          <div className='flex items-center mb-1'>
            <HiOutlineMail />
            <span className=' ml-2'>aurahuang1996@gmail.com</span>
          </div>
          <div className='flex items-center mb-1'>
            <BsGithub />
            <span className=' ml-2'>https://github.com/AuraHuang/</span>
          </div>
        </div>
      </div>
      <div className=' flex-center-col h-36 leading-7 md:px-5'>
        過去為富邦證PM，熱愛學習新事物，勇於跳脫舒適圈，接觸到程式後，享受Coding過程及成果產出後的成就感，自學提升技能並應用於工作中，減少部門人工作業提高效率，目前積極學習前端技術，目標成為前端工程師。
      </div>
    </header>
  )
}

export default Header