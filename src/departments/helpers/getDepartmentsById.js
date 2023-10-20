import { getInfoDepartments } from '../../helpers/getInfo'

export const getDepartmentsById = async (id) => {
  const departments = await getInfoDepartments()

  return departments.find((depar) => depar.name === id)
}
