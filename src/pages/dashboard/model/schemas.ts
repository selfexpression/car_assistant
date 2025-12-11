import { z } from 'zod'

import { ALERT_TYPES, ACTIVITY_TYPES } from './constants'

// User info schema
export const userInfoSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  avatar: z.string().url().optional(),
})

// Car schema
export const carSchema = z.object({
  id: z.string(),
  brand: z.string().min(1, 'Марка обязательна'),
  model: z.string().min(1, 'Модель обязательна'),
  year: z
    .number()
    .min(1900)
    .max(new Date().getFullYear() + 1),
  vin: z.string().min(17, 'VIN должен содержать 17 символов').max(17),
  mileage: z.number().min(0, 'Пробег не может быть отрицательным'),
  licensePlate: z.string().min(1, 'Госномер обязателен'),
  imageUrl: z.string().url().optional(),
  nextServiceDate: z.date().optional(),
  nextServiceMileage: z.number().min(0).optional(),
})

// Alert schema
export const alertSchema = z.object({
  id: z.string(),
  type: z.enum([ALERT_TYPES.CRITICAL, ALERT_TYPES.WARNING, ALERT_TYPES.INFO]),
  title: z.string().min(1, 'Заголовок обязателен'),
  message: z.string().min(1, 'Сообщение обязательно'),
  carId: z.string().optional(),
  dueDate: z.date().optional(),
  actionType: z.string().optional(),
})

// Activity item schema
export const activityItemSchema = z.object({
  id: z.string(),
  type: z.enum([
    ACTIVITY_TYPES.REPAIR,
    ACTIVITY_TYPES.FUEL,
    ACTIVITY_TYPES.MILEAGE,
    ACTIVITY_TYPES.SERVICE,
  ]),
  title: z.string().min(1, 'Заголовок обязателен'),
  description: z.string().min(1, 'Описание обязательно'),
  date: z.date(),
  carId: z.string(),
  amount: z.number().optional(),
})

// Metric card schema
export const metricCardSchema = z.object({
  id: z.string(),
  label: z.string().min(1, 'Метка обязательна'),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  trend: z.enum(['up', 'down', 'neutral']).optional(),
})

// Dashboard data schema
export const dashboardDataSchema = z.object({
  user: userInfoSchema,
  cars: z.array(carSchema),
  alerts: z.array(alertSchema),
  recentActivity: z.array(activityItemSchema),
})
