import { IoMenuSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handle = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue-400">
      <h1 className="w-full text-3xl font-bold">Hello</h1>
      <ul className="hidden md:flex">
          <li className="p-4">Главная</li>
          <li className="p-4">Контакты</li>
          <li className="p-4">Товары</li>
          <li className="p-4">Войти</li>
      </ul>

      <div onClick={handle} className="block md:hidden">
        {!nav ? <IoIosClose size={30} /> : <IoMenuSharp size={25} />}
      </div>

      <div className={!nav ? "fixed left-0 top-0 h-full w-[60%] border-r bg-white ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold m-4">Hello</h1>

        <ul className="pt-25 uppercase m-4">
          <li className="p-4 border-b-1">Главная</li>
          <li className="p-4 border-b-1">Контакты</li>
          <li className="p-4 border-b-1">Товары</li>
          <li className="p-4">Войти</li>
        </ul>
      </div>

    </div>
  )
}