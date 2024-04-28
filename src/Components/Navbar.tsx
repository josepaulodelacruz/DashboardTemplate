import { FC } from 'react'
import { FaBars } from 'react-icons/fa6'

interface NavbarProps {
  onClick: () => void,
}

const Navbar: FC<NavbarProps> = ({ onClick }: NavbarProps) => {

  return (
    <nav className='bg-white shadow-lg h-20 flex items-center px-5'>
      <div>
        <FaBars onClick={onClick} />
      </div>
    </nav>
  )
}

export default Navbar
