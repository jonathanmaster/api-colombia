import caribe from '../../assets/region/caribe.webp'
import pacifico from '../../assets/region/pacifica.webp'
import orinoco from '../../assets/region/orinoquia.webp'
import amazonas from '../../assets/region/amazonas.webp'
import andina from '../../assets/region/andina.webp'
import insular from '../../assets/region/insular.webp'

export const getInfo = async () => {
  const URL = `https://api-colombia.com/api/v1/Country/Colombia`
  const resp = await fetch(URL)
  const data = await resp.json()

  const infos = {
    id: data.id,
    surface: data.surface,
    stateCapital: data.stateCapital,
    population: data.population,
  }

  return infos
}

// infoRegion
const regionImageMapping = {
  Caribe: caribe,
  Pacífico: pacifico,
  Orinoquía: orinoco,
  Amazonía: amazonas,
  Andina: andina,
  Insular: insular,
}

export const getInfoRegion = async () => {
  const URL = `https://api-colombia.com/api/v1/Region`
  const resp = await fetch(URL)
  const data = await resp.json()

  const regionData = data.map((region) => ({
    id: region.id,
    name: region.name,
    description: region.description,
    // Asigna la imagen desde el mapeo
    image: regionImageMapping[region.name],
  }))

  return regionData
}

//info Departments
export const getInfoDepartments = async () => {
  const URL = `https://api-colombia.com/api/v1/Department`
  const resp = await fetch(URL)
  const data = await resp.json()

  const department = data.map((depar) => ({
    id: depar.id,
    name: depar.name,
  }))

  return department
}

//indo president
export const getPresident = async () => {
  const URL = `https://api-colombia.com/api/v1/President`
  const resp = await fetch(URL)
  const data = await resp.json()

  const president = data.map((pres) => ({
    id: pres.id,
    image: pres.image,
    name: pres.name,
    lastName: pres.lastName,
    startPeriodDate: pres.startPeriodDate,
    endPeriodDate: pres.endPeriodDate,
    politicalParty: pres.politicalParty,
    description: pres.description,
  }))

  console.log(president)

  return president
}

getPresident()
