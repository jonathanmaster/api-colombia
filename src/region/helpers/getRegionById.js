import { getInfoRegion } from '../../helpers/getInfo'

export const getRegionById = async (id) => {
  const region = await getInfoRegion()

  return region.find((region) => region.name === id)
  //si no lo encuentra regresa un undefined
}
