import { FC } from 'react'


const Sidebar: FC  = () => {
  return (
    <div className="bg-gray-600 flex flex-col h-full w-64 shadow-lg">
      <div className="pt-5 px-5 mt-15 h-full">
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </div>
      <a>Logout</a>
    </div>
  )

}

export default Sidebar
