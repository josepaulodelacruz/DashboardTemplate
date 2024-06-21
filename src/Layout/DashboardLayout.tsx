import { useState } from 'react'
import Sidebar from '@/Components/Sidebar'
import Navbar from '@/Components/Navbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  const [isClose, setIsClose] = useState<boolean>()

  const _handleIsCloseSidebar = () => {
    setIsClose(prevstate => !prevstate)
  }

  return (
    <div className={`grid h-full transition-all ${isClose ? 'grid-cols-[15%_85%]' : 'grid-cols-[4%_96%]'}`}>

      <Sidebar
        isClose={isClose} />

      <div className='flex flex-col h-screen'>

        <Navbar onClick={_handleIsCloseSidebar} />

        <main id='' className='bg-gray-100 h-full overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

