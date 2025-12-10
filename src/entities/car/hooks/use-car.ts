// Custom hook for car operations
import { useMemo } from 'react'

import { getServiceStatus, formatCarName } from '../lib'
import type { ICar } from '../model'

export function useCar(carId: string, cars: ICar[] = []) {
  const car = useMemo(() => {
    return cars.find(c => c.id === carId) || null
  }, [carId, cars])

  const serviceStatus = useMemo(() => {
    if (!car) {
      return null
    }
    return getServiceStatus(car)
  }, [car])

  const displayName = useMemo(() => {
    if (!car) {
      return ''
    }
    return formatCarName(car)
  }, [car])

  const needsService = useMemo(() => {
    return serviceStatus
      ? serviceStatus.isOverdue || serviceStatus.daysToService <= 30
      : false
  }, [serviceStatus])

  const metrics = useMemo(() => {
    if (!car || !serviceStatus) {
      return null
    }

    return {
      totalMileage: car.mileage,
      daysToNextService: serviceStatus.daysToService,
      mileageToNextService: serviceStatus.mileageToService,
      isOverdue: serviceStatus.isOverdue,
    }
  }, [car, serviceStatus])

  return {
    car,
    serviceStatus,
    displayName,
    needsService,
    metrics,
    isLoading: false, // TODO: implement loading state
    error: null, // TODO: implement error handling
  }
}
