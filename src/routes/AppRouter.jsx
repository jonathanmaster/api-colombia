import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../home/Home'
import { President } from '../presidents/components/President'
import { Departaments } from '../departments/components/Departaments'
import { AllRegion } from '../region/components/AllRegion'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='presidente' element={<President />} />
        <Route path='departamentos' element={<Departaments />} />
        <Route path='region' element={<AllRegion />} />
        {/* <Route path='native' element={<President />} />
        <Route path='area' element={<President />} />
        <Route path='especie' element={<President />} />
        <Route path='mapa' element={<President />} /> */}

        {/*para que navegue directamente  */}
        <Route path='/' element={<Navigate to={'/'} />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
        <Route />
      </Routes>
    </>
  )
}
