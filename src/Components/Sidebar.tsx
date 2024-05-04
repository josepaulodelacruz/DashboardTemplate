import React, { FC, ReactNode } from 'react'
import { FaLeftLong, FaUsers, FaHouse } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import '../index.css'

interface SidebarProps {
  isClose?: boolean,
  style?: React.HtmlHTMLAttributes<string>
}

const Sidebar: FC<SidebarProps> = ({ isClose, style }) => {
  return (
    <div style={style} className={`item bg-primary flex flex-col pl-5 py-8 h-screen`}>

      <ul className='flex h-full flex-col text-white leading-tight overflow-y-auto overflow-x-hidden'>

        <SidebarIcon
          routePath='/'
          icon={<FaHouse size={24} />}
          linkName='Home'
          isClose={isClose!}
        />
        
        <SidebarIcon
          routePath='/users'
          icon={<FaUsers size={24} />}
          linkName='User Management'
          isClose={isClose!}
        />
      </ul>

      <div className='flex items-center'>
        <a className='flex flex-row leading-tight gap-8 text-white'>
          <FaLeftLong size={24} color='white' />
          <span style={{ 'opacity': isClose ? '1' : '0' }} className='transition-all text-sm whitespace-nowrap font-bold'>Logout</span>
        </a>
      </div>

    </div>
  )

}

interface SidebarIconProps {
  linkName?: string,
  icon?: ReactNode
  routePath?: string,
  isClose: boolean
}

const SidebarIcon: FC<SidebarIconProps> = ({ linkName, icon, routePath, isClose = false }) => {
  return (
    <li className='flex items-center pb-5'>
      <Link to={`${routePath}`} className='flex items-center flex-row gap-7'>
        {icon}
        <span style={{ 'fontSize': '12px', 'opacity': isClose ? '1' : '0' }} className='transition-all whitespace-nowrap font-bold'>{linkName}</span>
      </Link>
    </li>

  )
}

export default Sidebar
