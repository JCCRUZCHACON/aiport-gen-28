import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'


const planeSchema = z.object({
    plane_id: z.integer().min(3).max(20),
    plane_number: z.integer().min(3).max(20),
    model: z.string(),
    max_capacity: z.integer(),
})

export const validatePlane = (data) => {
  const result = planeSchema.safeParse(data)

  const { 
    hasError, 
    errorMessages, 
    data: planeData
  } =  extractValidationData(result)

  return {
    hasError,
    errorMessages,
    planeData
  }
}

export const validatePartialPlane = (data) => {
  const result = planeSchema.partial().safeParse(data)

  const {
    hasError,
    errorMessages,
    data: dataPlane,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    dataPlane,
  }

}