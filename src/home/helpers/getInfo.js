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

const regionImageMapping = {
  Caribe: '../../assets/region/caribe.webp',
  Pacífico: '../../assets/region/pacifica.webp',
  Orinoquía: '../../assets/region/orinoquia.webp',
  Amazonía: '../../assets/region/amazonas.webp',
  Andina: '../../assets/region/andina.webp',
  Insular: '../../assets/region/insular.webp',
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
