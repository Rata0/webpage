import axios from 'axios'
import { useEffect, useState } from 'react'
import { data } from '../../../shared/lib/data'

// type Product = {
//     id: number,
//     title: string,
//     category: string,
//     price: number,
// }

export default function Card() {
  const [product, setProduct]= useState(data)

  useEffect(() => {
    (async () => {
      const res = await axios.get('/products')
      setProduct(res.data)
    })()

    console.log(product)
  }, [])

  console.log(product)

  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        {product.map((value) => (
          <div key={value.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='p-5'>
              <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{value.title}</h1>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{value.episodes}</p>
              <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}