import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPresidentById } from '../helpers/getPresidentById'

export const President = () => {
  const navigate = useNavigate()
  const onNavigateBack = () => {
    navigate(-1)
  }

  const { id } = useParams()
  const [president, setPresident] = useState(null)

  useEffect(() => {
    const fetchPresident = async () => {
      const result = await getPresidentById(id)
      setPresident(result)

      // Si result es null o undefined, redirige al usuario a la página de inicio
      if (!result) {
        navigate('/')
      }
    }

    fetchPresident()
  }, [id, navigate])

  if (!president) return null

  return (
    <section className='max-w-2xl py-4 px-2 mx-2 my-auto text-center bg-white shadow-sm rounded-sm sm:mx-auto '>
      <div className='flex justify-center  -mt-16 text-white font-bold'>
        <p>{president.startPeriodDate}</p>
        <img
          className='w-28 h-28 object-contain rounded-full '
          src={president.image}
        />
        <p>{president.endPeriodDate}</p>
      </div>

      <div>
        <h2 className='text-gray-800 text-3xl font-semibold'>
          {president.name}
          {president.lastName}
        </h2>
        <p className='font-semibold'>{president.politicalParty}</p>
        <p className='mt-2 '>{president.description}</p>
      </div>
      <div className='flex justify-end mt-4'>
        <button
          onClick={onNavigateBack}
          className='btn border-none  bg-slate-100 text-black hover:border-solid hover:bg-transparent'
        >
          Atrás
        </button>
      </div>
    </section>
  )
}
