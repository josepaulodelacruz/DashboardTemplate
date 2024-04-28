import { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { Outlet  } from 'react-router-dom'

const DashboardLayout = () => {
  const [isClose, setIsClose] = useState<boolean>(false)

  const _handleIsCloseSidebar = () => {
    setIsClose(prevstate => !prevstate);
  }


  return (
    <div className={`grid h-full transition-all ${isClose ? 'grid-cols-[20%_80%]' : 'grid-cols-[5%_95%]'}`}>

      <Sidebar />

      <div className='flex flex-col h-full'>

        <Navbar onClick={_handleIsCloseSidebar}/>

        <main id='' className='bg-gray-100 h-full'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

