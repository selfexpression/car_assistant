// Metrics calculation utilities for dashboard
import type { ICar } from '../../../entities/car/model'

export function calculateDaysToService(car: ICar): number {
  if (!car.nextServiceDate) {
    return Infinity
  }

  const now = new Date()
  const serviceDate = new Date(car.nextServiceDate)
  const diffInMs = serviceDate.getTime() - now.getTime()
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))

  return Math.max(0, diffInDays)
}

export function calculateMileageToService(car: ICar): number {
  if (!car.nextServiceMileage) {
    return Infinity
  }

  return Math.max(0, car.nextServiceMileage - car.mileage)
}

export function getAlertPriority(
  daysToService: number,
  mileageToService: number
): 'critical' | 'warning' | 'info' {
  const minValue = Math.min(daysToService, mileageToService)

  if (minValue <= 7) {
    return 'critical'
  }
  if (minValue <= 30) {
    return 'warning'
  }
  return 'info'
}

export function formatMileage(mileage: number): string {
  if (mileage >= 1000) {
    return `${(mileage / 1000).toFixed(1)}к`
  }
  return mileage.toString()
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getActivityIcon(
  type: string
): keyof typeof import('@expo/vector-icons').Ionicons.glyphMap {
  switch (type) {
    case 'repair':
      return 'build'
    case 'fuel':
      return 'water'
    case 'mileage':
      return 'speedometer'
    case 'service':
      return 'construct'
    default:
      return 'information-circle'
  }
}

export function getAlertIcon(type: string): string {
  switch (type) {
    case 'critical':
      return 'error'
    case 'warning':
      return 'warning'
    case 'info':
      return 'info'
    default:
      return 'info'
  }
}
