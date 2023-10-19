import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getRegionById } from '../helpers/getRegionById'
import { useEffect, useState } from 'react'

export const AllRegion = () => {
  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  const { id } = useParams()
  const [region, setRegion] = useState(null)

  useEffect(() => {
    const fetchRegion = async () => {
      const result = await getRegionById(id)
      setRegion(result)

      // Si result es null o undefined, redirige al usuario a la página de inicio
      if (!result) {
        navigate('/home')
      }
    }

    fetchRegion()
  }, [id, navigate])

  if (!region) {
    return null
  }

  return (
    <div className='flex items-center sm:p-14 '>
      <div className='card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto '>
        <figure className=''>
          <img
            src={region.image}
            alt={region.name}
            className='w-full h-full lg:w-2000'
          />
        </figure>
        <div className='card-body bg-white'>
          <h2 className='card-title'> Región {region.name}</h2>
          <p>{region.description}</p>
          <div className='card-actions justify-end'>
            <button onClick={onNavigateBack} className='btn btn-primary'>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
