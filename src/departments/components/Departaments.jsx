import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDepartmentsById } from '../helpers/getDepartmentsById'
import Mapa from '../../assets/departamentos/mapa-departamento.svg'

export const Departaments = () => {
  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  const { id } = useParams()
  const [departments, setDepartments] = useState(null)

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await getDepartmentsById(id)
      setDepartments(result)

      // Si result es null o undefined, redirige al usuario a la página de inicio
      if (!result) {
        navigate('/')
      }
    }

    fetchDepartments()
  }, [id, navigate])

  if (!departments) return null

  return (
    <section className='text-white p-6'>
      <h1 className='text-5xl sm:text-6xl text-center my-6'>
        {departments.name}
      </h1>

      <div className='flex flex-col sm:flex-row lg:max-w-5xl lg:items-center lg:mx-auto'>
        <div>
          <img src={Mapa} alt='mapa-departamentos' className='sm:max-w-xs' />
        </div>
        <div className='mt-7 text-center p-2'>
          <p>{departments.description}</p>
          <div className='grid grid-cols-2 sm:grid-cols-4 mt-9 gap-1 sm:gap-1 '>
            <p className='flex flex-col p-3  bg-black opacity-70 text-white text-center font-medium rounded-md'>
              Ciuddades Capital
              <small className='text-lg'>{departments.cityCapitalId}</small>
            </p>
            <p className='flex flex-col p-3  bg-black opacity-70 text-white text-center font-medium rounded-md'>
              Municipios
              <small className='text-lg'>{departments.municipalities}</small>
            </p>
            <p className='flex flex-col p-3  bg-black opacity-70 text-white text-center font-medium rounded-md'>
              Superficie
              <small className='text-lg'>{departments.surface}km²</small>
            </p>
            <p className='flex flex-col p-3  bg-black opacity-70 text-white text-center font-medium rounded-md'>
              Población
              <small className='text-lg'>{departments.population}</small>
            </p>
          </div>
          <button
            onClick={onNavigateBack}
            className='w-48 my-4 btn border-none bg-white text-black hover:border-solid hover:bg-transparent hover:text-white'
          >
            Atrás
          </button>
        </div>
      </div>
    </section>
  )
}
