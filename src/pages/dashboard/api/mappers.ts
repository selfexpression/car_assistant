// Data mappers for dashboard API
import type { IDashboardData, IAlert, IActivityItem } from '../model'
import {
  getAlertPriority,
  calculateDaysToService,
  calculateMileageToService,
} from '../lib'

// Transform API response to dashboard data
export function mapApiToDashboard(apiData: unknown): IDashboardData {
  // This would transform API response to our internal types
  // For now, return mock data as API response
  return apiData as IDashboardData
}

// Transform cars data to alerts
export function mapCarsToAlerts(cars: IDashboardData['cars']): IAlert[] {
  const alerts: IAlert[] = []

  cars.forEach(car => {
    const daysToService = calculateDaysToService(car)
    const mileageToService = calculateMileageToService(car)

    if (daysToService <= 30 || mileageToService <= 1000) {
      const priority = getAlertPriority(daysToService, mileageToService)
      const isDaysCritical = daysToService <= 7
      const isMileageCritical = mileageToService <= 500

      alerts.push({
        id: `service-${car.id}`,
        type: priority,
        title: `ТО ${car.brand} ${car.model} ${
          isDaysCritical
            ? `через ${daysToService} дней`
            : isMileageCritical
              ? `через ${mileageToService} км`
              : 'скоро'
        }`,
        message: isDaysCritical
          ? `Плановое техническое обслуживание через ${daysToService} дней`
          : isMileageCritical
            ? `Рекомендуется ТО при пробеге ${car.nextServiceMileage} км`
            : 'Проверьте необходимость технического обслуживания',
        carId: car.id,
        dueDate: car.nextServiceDate || new Date(),
        actionType: 'service',
      })
    }
  })

  return alerts
}

// Sort alerts by priority
export function sortAlertsByPriority(alerts: IAlert[]): IAlert[] {
  const priorityOrder = { critical: 3, warning: 2, info: 1 }

  return [...alerts].sort((a, b) => {
    return priorityOrder[b.type] - priorityOrder[a.type]
  })
}

// Sort activity by date (newest first)
export function sortActivityByDate(activity: IActivityItem[]): IActivityItem[] {
  return [...activity].sort((a, b) => b.date.getTime() - a.date.getTime())
}

// Limit arrays to specified length
export function limitArray<T>(array: T[], limit: number): T[] {
  return array.slice(0, limit)
}
