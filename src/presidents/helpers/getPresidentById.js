import { getPresident } from '../../helpers/getInfo'

export const getPresidentById = async (id) => {
  const president = await getPresident()

  return president.find((pres) => pres.name === id)
  //si no lo encuentra regresa un undefined
}
