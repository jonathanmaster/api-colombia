import { useEffect, useState } from 'react'
import { getInfoRegion } from '../helpers/getInfo'
import { NavLink } from 'react-router-dom'

export const SectionRegions = () => {
  const [infoRegion, setInfoRegion] = useState([])

  const getNewRegion = async () => {
    const newRegion = await getInfoRegion()
    setInfoRegion(newRegion)
  }

  useEffect(() => {
    getNewRegion()
  }, [])

  return (
    <article className='p-2'>
      <section className='text-center m-3 text-white'>
        <h2 className='text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl'>
          Regiones
        </h2>
        <p className='m-3'>
          El territorio colombiano se divide en seis regiones
        </p>
      </section>

      <section className='mt-10 md:flex md:justify-center'>
        <div className='grid lg:grid-cols-3 gap-4 lg:gap-2 sm:grid-cols-2 place-items-center'>
          {infoRegion.map((region) => (
            <div
              key={region.id}
              className='py-2 px-8 bg-white shadow-lg rounded-lg my-6 md:w-80 sm:w-64'
            >
              <div className='flex justify-center md:justify-end -mt-16'>
                <img
                  className='w-32 h-32 object-cover rounded-full border-2 border-indigo-500'
                  src={region.image}
                  alt={region.name}
                />
              </div>
              <div>
                <h2 className='text-gray-800 text-3xl font-semibold'>
                  Región {region.name}
                </h2>
                <p className='mt-2 text-gray-600'>
                  {region.description.slice(0, 80)}...
                </p>
              </div>
              <div className='flex justify-end items-center mt-4'>
                <NavLink
                  to='/region'
                  className='text-xl font-medium text-black hover:text-indigo-500'
                >
                  Saber Más...
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
