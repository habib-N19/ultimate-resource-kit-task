import logo from '../../assets/logo2.jpeg'
import { FaSearch, FaRegNewspaper, FaRegUser, FaRegBell } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { BsCardList } from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'

const NavBar = () => {
  return (
    <nav className='flex flex-row order-last space-y-10 text-2xl md:justify-between md:w-16 md:h-screen md:flex-col md:order-first '>
      <div className='flex flex-col justify-between'>
        <div className='mb-8'>
          <div className='hidden w-full pl-0 md:block'>
            <img src={logo} alt='' />
          </div>
          <FaSearch className='order-last mx-auto' />
        </div>
        <FiHome className='mx-auto'></FiHome>
        <FaRegNewspaper className='mx-auto' />
        <BsCardList className='mx-auto' />
        <FaRegUser className='mx-auto' />
      </div>
      <div className='justify-end space-y-2'>
        <FaRegBell className='mx-auto' />
        <TbLogout className='mx-auto' />
      </div>
    </nav>
  )
}

export default NavBar
