import React from 'react'
import { NavItemProps } from '../types'

const NavItem = ({title, scrollTo}: NavItemProps) => {
  return (
    <span className='nav-item border-black dark:border-white text-black dark:text-white' onClick={scrollTo}>{ title }</span>
  )
}

export default NavItem