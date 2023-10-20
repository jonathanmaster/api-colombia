import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../home/Home'
import { Departaments } from '../departments/components/Departaments'
import { AllRegion } from '../region/components/AllRegion'
import { AllPresidents } from '../presidents/components/AllPresident'
import { President } from '../presidents/components/President'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='region/:id' element={<AllRegion />} />
        <Route path='departamentos/:id' element={<Departaments />} />
        <Route path='presidentes' element={<AllPresidents />} />
        <Route path='presidente/:id' element={<President />} />
        {/* <Route path='native' element={<President />} />
        <Route path='area' element={<President />} />
        <Route path='especie' element={<President />} />
        <Route path='mapa' element={<President />} /> */}

        {/*para que navegue directamente  */}
        <Route path='/' element={<Navigate to={<Home />} />} />
        <Route path='/*' element={<Navigate to={<Home />} />} />
        <Route />
      </Routes>
    </>
  )
}
