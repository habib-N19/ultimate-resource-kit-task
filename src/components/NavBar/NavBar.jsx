import logo from '../../assets/logo2.jpeg'
import { FaSearch, FaRegNewspaper, FaRegUser, FaRegBell } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { BsCardList } from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'

const NavBar = () => {
  return (
    <nav className='flex flex-col w-16 h-full space-y-10 text-2xl '>
      <div className='w-full pl-0'>
        <img src={logo} alt='' />
      </div>
      <FaSearch className='mx-auto' />
      <FiHome className='mx-auto'></FiHome>
      <FaRegNewspaper className='mx-auto' />
      <BsCardList className='mx-auto' />
      <FaRegUser className='mx-auto' />
      <FaRegBell className='mx-auto' />
      <TbLogout className='mx-auto' />
    </nav>
  )
}

export default NavBar
