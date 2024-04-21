import  { FC } from 'react'

interface NavbarProps {
  onClick: () => void,
}

const Navbar: FC<NavbarProps> = ({onClick} : NavbarProps) => {
  return (
    <nav className='flex items-center justify-between bg-white shadow-sm h-16 px-3'>
      <div className='flex'>
        <button onClick={onClick}>
          {"<=="}
        </button>
        <li className='flex text-2xl font-bold px-2'>
          Project Name
        </li>
      </div>

      <div className=''>
        Username
      </div>
    </nav>
  )
}

export default Navbar
