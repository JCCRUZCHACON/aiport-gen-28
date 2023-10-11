import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'


const flightSchema = z.object({
    flight_id: z.integer().min(3).max(60),
    origin_id: z.integer().min(3).max(60),
    destination_id: z.integer(),
    plane_id: z.integer(),
})

export const validateFlight = (data) => {
  const result = flightSchema.safeParse(data)

  const { 
    hasError, 
    errorMessages, 
    data: flightData
  } =  extractValidationData(result)

  return {
    hasError,
    errorMessages,
    flightData
  }
}

export const validatePartialFlight = (data) => {
  const result = flightSchema.partial().safeParse(data)

  const {
    hasError,
    errorMessages,
    data: dataFlight,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    dataFlight,
  }

}