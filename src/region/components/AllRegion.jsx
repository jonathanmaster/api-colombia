import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getInfoRegion } from '../../home/helpers/getInfo'

export const AllRegion = () => {
  const navigate = useNavigate()
  const [card, setCard] = useState([])

  const onNavigateBack = () => {
    navigate(-1)
  }

  const getCardRegion = async () => {
    const cardsRegion = await getInfoRegion()
    setCard(cardsRegion)
  }

  useEffect(() => {
    getCardRegion()
  }, [])

  console.log(card)

  return (
    <div className='h-screen flex items-center'>
      <div className='card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto '>
        <figure>
          <img
            src='https://cgworld.jp/article/assets_c/2023/06/8d2be677b855404f464c027c52d1424993ac4ec5-thumb-1920x1080-39398.jpg'
            alt='Album'
            className='w-full h-full'
          />
        </figure>
        <div className='card-body bg-white'>
          <h2 className='card-title'> Región {card.name}</h2>
          <p>{card.description}</p>
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
