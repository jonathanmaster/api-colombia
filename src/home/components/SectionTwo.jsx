import { useEffect, useState } from 'react'
import { getInfoRegion } from '../helpers/getInfo'

export const SectionTwo = () => {
  const [infoRegion, setInfoRegion] = useState([])

  const getNewRegion = async () => {
    const newRegion = await getInfoRegion()
    setInfoRegion(newRegion)
  }

  useEffect(() => {
    getNewRegion()
  }, [])

  return (
    <article>
      <section className='text-center m-3 text-white'>
        <h2 className='text-7xl'>Regiones</h2>
        <p className='m-3'>
          El territorio colombiano se divide en seis regiones
        </p>
      </section>

      <section className='mt-10 md:flex md:justify-center'>
        <div className='grid lg:grid-cols-3 gap-4 lg:gap-2 sm:grid-cols-2'>
          {infoRegion.map((region) => (
            <div
              key={region.id}
              className='w-96 py-2 px-8 bg-white shadow-lg rounded-lg my-6 '
            >
              {console.log(region.image)}
              <div className='flex justify-center md:justify-end -mt-16'>
                <img
                  className='w-32 h-32 object-cover rounded-full border-2 border-indigo-500'
                  src={region.image}
                  alt={region.name}
                />
              </div>
              <div>
                <h2 className='text-gray-800 text-3xl font-semibold'>
                  {region.name}
                </h2>
                <p className='mt-2 text-gray-600'>{region.description}</p>
              </div>
              <div className='flex justify-end items-center mt-4'>
                <a href='#' className='text-xl font-medium text-indigo-500'>
                  Saber Más
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
