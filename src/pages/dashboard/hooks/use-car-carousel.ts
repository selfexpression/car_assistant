// Custom hook for car carousel functionality
import { useState, useCallback, useEffect } from 'react'

import type { ICar } from '../../../entities/car/model'

export function useCarCarousel(cars: ICar[]) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Reset to first car when cars array changes
  useEffect(() => {
    if (cars.length > 0 && activeIndex >= cars.length) {
      setActiveIndex(0)
    }
  }, [cars.length, activeIndex])

  const goToNext = useCallback(() => {
    if (isAnimating || cars.length <= 1) {
      return
    }

    setIsAnimating(true)
    setActiveIndex(prev => (prev + 1) % cars.length)

    setTimeout(() => setIsAnimating(false), 300)
  }, [cars.length, isAnimating])

  const goToPrevious = useCallback(() => {
    if (isAnimating || cars.length <= 1) {
      return
    }

    setIsAnimating(true)
    setActiveIndex(prev => (prev - 1 + cars.length) % cars.length)

    setTimeout(() => setIsAnimating(false), 300)
  }, [cars.length, isAnimating])

  const goToIndex = useCallback(
    (index: number) => {
      if (
        isAnimating ||
        index === activeIndex ||
        index < 0 ||
        index >= cars.length
      ) {
        return
      }

      setIsAnimating(true)
      setActiveIndex(index)

      setTimeout(() => setIsAnimating(false), 300)
    },
    [activeIndex, cars.length, isAnimating]
  )

  const getActiveCar = useCallback(() => {
    return cars[activeIndex] || null
  }, [cars, activeIndex])

  const canNavigate = cars.length > 1
  const hasMultipleCars = cars.length > 1

  return {
    activeIndex,
    activeCar: getActiveCar(),
    isAnimating,
    canNavigate,
    hasMultipleCars,
    goToNext,
    goToPrevious,
    goToIndex,
  }
}
