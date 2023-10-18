import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPresident } from '../helpers/getInfo'

export const SectionPresidents = () => {
  const [president, setPresident] = useState([])

  const infoPresident = async () => {
    const data = await getPresident()
    setPresident(data)
  }

  useEffect(() => {
    infoPresident()
  }, [])

  return (
    <section className=' h-screen '>
      <div className='text-center m-3 text-white'>
        <h2 className='text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl'>
          Presidentes
        </h2>
        <p className='m3'>Todos los Presidentes que han recorrido Colombia</p>
      </div>
      <div className='grid  grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 sm:grid-cols-2 place-items-center mx-auto my-8 p-4 max-w-5xl'>
        {president
          .slice()
          .reverse()
          .slice(0, 10)
          .map((pres) => (
            <NavLink
              key={pres.id}
              className='card card-side bg-white shadow-xl w-64 h-28 transition-transform transform hover:scale-105'
            >
              <figure>
                <img className='w-full h-28' src={pres.image} alt='Movie' />
              </figure>
              <div className='p-4'>
                <h2 className=''>
                  {pres.name} {pres.lastName}
                </h2>
                <p>{pres.startPeriodDate}</p>
                <p>{pres.endPeriodDate}</p>
              </div>
            </NavLink>
          ))}
        <button className='btn border-none bg-white text-black hover:border-solid hover:bg-transparent hover:text-white'>
          <NavLink to='/presidente'>Saber Más...</NavLink>
        </button>
      </div>
    </section>
  )
}
