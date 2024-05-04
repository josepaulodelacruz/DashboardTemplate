import { FC } from 'react'
import { FaBars } from 'react-icons/fa6'

interface NavbarProps {
  onClick: () => void,
}

const Navbar: FC<NavbarProps> = ({ onClick }: NavbarProps) => {

  return (
    <nav className='bg-white shadow-sm h-20 flex items-center px-5'>
      <button
        onClick={onClick}
        className='border rounded-lg border-gray p-3'>
        <FaBars />
      </button>
    </nav>
  )
}

export default Navbar
