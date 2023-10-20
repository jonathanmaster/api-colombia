import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getInfoDepartments } from '../../helpers/getInfo'

import '../style.css'

export const SectionDepartments = () => {
  const [infoDepartments, setInfoDepartments] = useState([])

  const getInfoDepar = async () => {
    const info = await getInfoDepartments()
    setInfoDepartments(info)
  }

  useEffect(() => {
    getInfoDepar()
  }, [])

  return (
    <div className='my-5'>
      <section className='text-center m-3 text-white'>
        <h2 className='text-4xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl'>
          Departamentos
        </h2>
        <p className='m-3'>
          El territorio colombiano se divide en 33 departamentos
        </p>
      </section>
      <section className='grid max-w-4xl mx-auto grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-2 sm:grid-cols-3 place-items-center '>
        {infoDepartments.map((depar) => (
          <div key={depar.id} className=' text-white '>
            <div className=''>
              <Link
                to={`/departamentos/${depar.name}`}
                className='navLinkDep btn shadow-lg hover:shadow-lg hover:shadow-indigo-500/50'
              >
                Dep. {depar.name}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
