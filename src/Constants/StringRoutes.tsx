import { FaHouse, FaUsers } from 'react-icons/fa6'

const RouteModule = {
  USER: '/users',
  ADD_USER: '/users/add-user'
}


const SidebarMenus = [
  {
    path: '/',
    pathName: 'Home',
    icon: <FaHouse size={24} />
  },
  {
    path: RouteModule.USER,
    pathName: 'User Management',
    icon: <FaUsers size={24} />
  },
]

export {
  RouteModule,
  SidebarMenus
} 

