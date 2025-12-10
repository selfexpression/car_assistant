import { z } from 'zod'

import { FUEL_TYPES } from './constants'

// Car schema
export const carSchema = z.object({
  id: z.string(),
  brand: z.string().min(1, 'Марка обязательна'),
  model: z.string().min(1, 'Модель обязательна'),
  year: z
    .number()
    .min(1900, 'Год не может быть раньше 1900')
    .max(new Date().getFullYear() + 1, 'Год не может быть в будущем'),
  vin: z
    .string()
    .min(17, 'VIN должен содержать 17 символов')
    .max(17, 'VIN должен содержать 17 символов')
    .regex(/^[A-HJ-NPR-Z0-9]{17}$/i, 'Неверный формат VIN'),
  mileage: z
    .number()
    .min(0, 'Пробег не может быть отрицательным')
    .max(9999999, 'Слишком большой пробег'),
  licensePlate: z
    .string()
    .min(1, 'Госномер обязателен')
    .max(20, 'Слишком длинный госномер'),
  imageUrl: z.string().url().optional().or(z.literal('')),
  purchaseDate: z.date().optional(),
  nextServiceDate: z.date().optional(),
  nextServiceMileage: z.number().min(0).optional(),
  fuelType: z.enum([
    FUEL_TYPES.PETROL,
    FUEL_TYPES.DIESEL,
    FUEL_TYPES.ELECTRIC,
    FUEL_TYPES.HYBRID,
  ]),
  engineVolume: z.number().min(0.1).max(20).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

// Car form data schema (for creating/editing)
export const carFormDataSchema = z.object({
  brand: z.string().min(1, 'Марка обязательна'),
  model: z.string().min(1, 'Модель обязательна'),
  year: z
    .number()
    .min(1900, 'Год не может быть раньше 1900')
    .max(new Date().getFullYear() + 1, 'Год не может быть в будущем'),
  vin: z
    .string()
    .min(17, 'VIN должен содержать 17 символов')
    .max(17, 'VIN должен содержать 17 символов')
    .regex(/^[A-HJ-NPR-Z0-9]{17}$/i, 'Неверный формат VIN'),
  mileage: z
    .number()
    .min(0, 'Пробег не может быть отрицательным')
    .max(9999999, 'Слишком большой пробег'),
  licensePlate: z
    .string()
    .min(1, 'Госномер обязателен')
    .max(20, 'Слишком длинный госномер'),
  imageUrl: z.string().url().optional().or(z.literal('')),
  purchaseDate: z.date().optional(),
  fuelType: z.enum([
    FUEL_TYPES.PETROL,
    FUEL_TYPES.DIESEL,
    FUEL_TYPES.ELECTRIC,
    FUEL_TYPES.HYBRID,
  ]),
  engineVolume: z.number().min(0.1).max(20).optional(),
})

// Car metrics schema
export const carMetricsSchema = z.object({
  totalMileage: z.number().min(0),
  averageMileagePerMonth: z.number().min(0),
  daysToNextService: z.number(),
  mileageToNextService: z.number(),
})
