import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'

const App = () => {
  const [isClose, setIsClose] = useState<boolean>(false);

  const _handleIsCloseSidebar = () => {
    setIsClose(!isClose)
  }

  return (
    <div className={`grid ${isClose && 'grid-cols-[20%_80%]'} h-full`}>

      { isClose && <div className='item bg-blue-300'></div> }

      <div className='flex flex-col h-full'>
        <nav className='bg-white shadow-black h-20 flex items-center px-5'>

          <div>
            <FaBars onClick={_handleIsCloseSidebar}/>
          </div>

        </nav>

        <div className='bg-gray-100 h-full'>
        </div>
      </div>
    </div>
  )
}

export default App
