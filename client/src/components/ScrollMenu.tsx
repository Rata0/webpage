export default function ScrollMenu() {
  return (
    <div className="flex items-center max-w-[1240px] mx-auto px-4 text-[#000] hidden md:flex">
      <ul className="w-full flex">
        <li className="p-4 hover:text-red-500 transition-colors duration-200">Верхняя одежда</li>
        <li className="p-4 hover:text-red-500 transition-colors duration-200">Толстовка</li>
        <li className="p-4 hover:text-red-500 transition-colors duration-200">Обувь</li>
        <li className="p-4 hover:text-red-500 transition-colors duration-200">Футболки</li>
      </ul>
    </div>
  )
}