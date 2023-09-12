import React from 'react'
import { BsPhone, BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const Header = () => {
  return (
    <header className=' grid grid-cols-1 pt-10 lg:grid-cols-2'>
      <div className=' flex-between flex-col sm:flex-row'>
        <img 
          src={'/images/Avatar.png'} 
          alt="Avatar" 
          className=' w-36 h-36 rounded-full object-cover bg-slate-200'
        />
        <div className=' flex-1 flex-center-col h-36 px-5 md: py-5 lg:border-r-2'>
          <div className='title mb-3'>聯絡資訊</div>
          <div className='flex items-center mb-1'>
            <BsPhone />
            <span className=' ml-2'>
              <a href = "tel:(+886) 963720990">(+886) 963720990</a>
            </span>
          </div>
          <div className='flex items-center mb-1'>
            <HiOutlineMail />
            <span className=' ml-2'>
              <a href = "mailto: aurahuang1996@gmail.com">aurahuang1996@gmail.com</a>
            </span>
          </div>
          <div className='flex items-center mb-1'>
            <BsGithub />
            <span className=' ml-2'>
              <a href="https://github.com/AuraHuang" target='blank'>https://github.com/AuraHuang/</a>
            </span>
          </div>
        </div>
      </div>
      <div className=' flex-center-col py-5 md:px-5 border-t md:border-none border-white leading-7'>
      前份工作任職於富邦證擔任商品PM，熱愛學習新事物，勇於跳脫舒適圈，自學程式應用於工作中，如進行數據分析、輔助部門減少人工作業提高效率，享受Coding過程及成果產出後的成就感，目前積極精進前端技術，目標成為前端工程師
      </div>
    </header>
  )
}

export default Header