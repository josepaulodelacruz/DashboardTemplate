import { FC, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'

const App: FC = () => {
  const [isClose, setIsClose] = useState(false)

  const _handleToggleSidebar = () => {
    setIsClose(!isClose)
  }

  return (
    <div className='h-screen w-screen'>
      <div className='flex flex-row h-dvh bg-gray-300'>
        <Sidebar />

        <div className='container flex flex-col'>
          <Navbar onClick={_handleToggleSidebar}/>

          <div className='flex flex-col h-full'>
            <Dashboard />
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
