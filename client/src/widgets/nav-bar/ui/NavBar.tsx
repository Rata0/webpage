import { IoMenuSharp } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'
import { CiHeart, CiLogin  } from 'react-icons/ci'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [nav, setNav] = useState(false)

  const handle = () => setNav(!nav)

  return (
    <div className='border-b flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#000]'>

      <ul className='w-full flex font-bold text-sm uppercase'>
        <li className='p-4 hover:text-red-500 transition-colors duration-200'>главная</li>
        <li className='p-4 hover:text-red-500 transition-colors duration-200'><Link to='cards'>Карточки</Link></li>
        <li className='p-4 hover:text-red-500 transition-colors duration-200'>Популярное</li>
        <li className='p-4 hover:text-red-500 transition-colors duration-200'>Новинки</li>
      </ul>

      <div onClick={handle} className='block md:hidden'>
        {!nav ? <IoMenuSharp size={25} /> : <IoIosClose size={30} />}
      </div>

      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-red-500 transition-colors duration-200'><Link to='create'>Добавить</Link></li>
        <li className='p-4 hover:text-red-500 transition-colors duration-200'><CiHeart size={30}/></li>
        <li className='p-4 hover:text-red-500 transition-colors duration-200'><CiLogin size={30}/></li>
      </ul>

      <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4'>Hello</h1>

        <div onClick={handle} className='block md:hidden'>
          {!nav ? <IoMenuSharp size={25} /> : <IoIosClose size={30} />}
        </div>

        <ul className='pt-25 uppercase m-4'>
          <li className='p-4 border-b-1'>Главная</li>
          <li className='p-4 border-b-1'>Карточки</li>
          <li className='p-4 border-b-1'>Популярное</li>
          <li className='p-4 border-b-1'>Избранное</li>
          <li className='p-4'>Войти</li>
        </ul>
      </div>
      
    </div>
  )
}