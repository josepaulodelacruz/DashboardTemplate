import { FC, ReactNode } from 'react'
import { FaLeftLong, FaUsers } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

interface SidebarProps {
  isClose?: boolean,
}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className={`item bg-primary flex flex-col px-5 py-8`}>

      <ul className='flex h-full flex-col text-white leading-tight '>
        <SidebarIcon
          routePath='/'
          icon={<FaUsers size={24} />}
          linkName='Home'
        />
        <SidebarIcon
          routePath='/users'
          icon={<FaUsers size={24} />}
          linkName='User Management'
        />
      </ul>

      <div className='flex items-center'>
        <a className='flex flex-row leading-tight gap-8 text-white'>
          <FaLeftLong size={24} color='white' />
          <span className='text-sm whitespace-nowrap font-bold'>Logout</span>
        </a>
      </div>

    </div>
  )

}

interface SidebarIconProps {
  linkName?: string,
  icon?: ReactNode
  routePath?: string,
}

const SidebarIcon: FC<SidebarIconProps> = ({ linkName, icon, routePath}) => {
  return (
    <li className='flex items-center pb-4'>
      <Link to={`${routePath}`} className='flex items-center flex-row gap-8'>
        {icon}
        <span style={{'fontSize': '12px'}} className='whitespace-nowrap font-bold'>{linkName}</span>
      </Link>
    </li>

  )
}

export default Sidebar
