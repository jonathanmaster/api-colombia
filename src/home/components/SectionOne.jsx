import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'

import '../../index.css'
import { getInfo } from '../helpers/getInfo'
import { useEffect, useState } from 'react'

export const SectionOne = () => {
  const [infos, setInfos] = useState([])

  const getNewInfo = async () => {
    const newInfo = await getInfo()
    setInfos(newInfo)
  }

  useEffect(() => {
    getNewInfo()
  }, [])

  return (
    <article className='img-fund w-full h-screen flex flex-col justify-center items-center text-white'>
      <section className=''>
        <div>
          <h1 className='text-7xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl'>
            Colombia
          </h1>
          <p className='text-center text-xl font-semibold'>
            Todo sobre Colombia
          </p>
        </div>
      </section>
      <section className='m-5'>
        <form>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Search
          </label>
          <div className='relative w-72 sm:w-96'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <MagnifyingGlassCircleIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Departamentos, Regiones, Presidente...'
              required
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Search
            </button>
          </div>
        </form>
        <form></form>
      </section>

      {/* acá se hace la petición y se añade los tres datos */}
      <section className='flex mt-9 gap-1 sm:gap-5'>
        <div className=' p-3  bg-black opacity-70 text-white text-center font-medium rounded-md'>
          Superficie
          <p>{infos.surface} km²</p>
        </div>
        <div className=' p-3 bg-black opacity-70 text-center text-white font-medium rounded-md'>
          Estado Capital
          <p>{infos.stateCapital}</p>
        </div>
        <div className=' p-3 bg-black opacity-70 text-center text-white font-medium rounded-md'>
          Población
          <p>{infos.population}</p>
        </div>
      </section>
    </article>
  )
}
