import React, { FC, ReactNode } from 'react'
import { FaLeftLong  } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import '../index.css'
import {  SidebarMenus } from '@/Constants/StringRoutes'


interface SidebarProps {
  isClose?: boolean,
  style?: React.HtmlHTMLAttributes<string>
}

const Sidebar: FC<SidebarProps> = ({ isClose }) => {
  return (
    <div style={{ 'backgroundColor': '#202225' }} className={`item bg-primary flex flex-col py-8 h-screen`}>

      <ul className='flex h-full flex-col text-white leading-tight overflow-y-auto overflow-x-hidden'>

        {
          SidebarMenus.map((item, index) => (
            <SidebarIcon
              key={index}
              routePath={item.path}
              icon={item.icon}
              linkName={item.pathName}
              isClose={isClose!}
              />
          ))
        }

      </ul>

      <SidebarIcon
        routePath='/'
        icon={<FaLeftLong size={24} color='white' />}
        linkName='LOGOUT'
        isClose={isClose!}
      />

    </div>
  )

}

interface SidebarIconProps {
  linkName?: string,
  icon?: ReactNode
  routePath?: string | null,
  isClose: boolean,
  index?: number 
}

const SidebarIcon: FC<SidebarIconProps> = ({ linkName, icon, routePath, isClose = false, index }) => {
  return (
    <li className='flex items-center' key={index}>
      <Link to={`${routePath}`} className={`flex items-center flex-row gap-7 hover:bg-white hover:bg-opacity-20 rounded-lg flex-1 px-2 mx-2 py-2 transition-colors`}>
        {icon}
        <span style={{ 'fontSize': '12px', 'opacity': isClose ? '1' : '0', 'display': isClose ? 'block' : 'none', 'transitionDelay': isClose ? '0s' : '0.3s' }} className='text-white transition-all whitespace-nowrap font-bold'>{linkName}</span>
      </Link>
    </li>
  )
}

export default Sidebar
