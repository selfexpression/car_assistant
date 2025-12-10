// Car service calculation utilities
import type { ICar } from '../model'
import { SERVICE_INTERVALS } from '../model'

export function calculateNextServiceDate(car: ICar): Date | null {
  if (!car.purchaseDate) {
    return null
  }

  const purchaseDate = new Date(car.purchaseDate)
  const now = new Date()

  // Расчет примерной даты следующего ТО (каждые 12 месяцев)
  const monthsSincePurchase =
    (now.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
  const monthsToNextService = 12 - (monthsSincePurchase % 12)

  const nextServiceDate = new Date(now)
  nextServiceDate.setMonth(nextServiceDate.getMonth() + monthsToNextService)

  return nextServiceDate
}

export function calculateNextServiceMileage(car: ICar): number {
  // Расчет следующего ТО по пробегу (каждые 15,000 км)
  const lastServiceMileage =
    Math.floor(car.mileage / SERVICE_INTERVALS.GENERAL_INSPECTION) *
    SERVICE_INTERVALS.GENERAL_INSPECTION
  return lastServiceMileage + SERVICE_INTERVALS.GENERAL_INSPECTION
}

export function getServiceStatus(car: ICar): {
  daysToService: number
  mileageToService: number
  isOverdue: boolean
} {
  const nextServiceDate = car.nextServiceDate || calculateNextServiceDate(car)
  const nextServiceMileage =
    car.nextServiceMileage || calculateNextServiceMileage(car)

  const now = new Date()
  const daysToService = nextServiceDate
    ? Math.ceil(
        (nextServiceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      )
    : Infinity

  const mileageToService = nextServiceMileage - car.mileage

  const isOverdue = daysToService < 0 || mileageToService < 0

  return {
    daysToService: Math.max(0, daysToService),
    mileageToService: Math.max(0, mileageToService),
    isOverdue,
  }
}

export function shouldScheduleService(car: ICar): boolean {
  const status = getServiceStatus(car)
  return (
    status.daysToService <= 30 ||
    status.mileageToService <= 1000 ||
    status.isOverdue
  )
}
