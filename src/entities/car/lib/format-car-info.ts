// Car information formatting utilities
import type { ICar } from '../model'
import { FUEL_TYPE_LABELS } from '../model'

export function formatCarName(car: ICar): string {
  return `${car.brand} ${car.model} ${car.year}`
}

export function formatCarTitle(car: ICar): string {
  return `${car.brand} ${car.model}`
}

export function formatMileage(mileage: number): string {
  return new Intl.NumberFormat('ru-RU').format(mileage)
}

export function formatEngineVolume(volume?: number): string {
  if (!volume) {
    return ''
  }
  return `${volume.toFixed(1)} л`
}

export function formatFuelType(fuelType: ICar['fuelType']): string {
  return FUEL_TYPE_LABELS[fuelType]
}

export function formatLicensePlate(plate: string): string {
  // Форматирование госномера в российском формате
  // Пример: А123АА777 -> А 123 АА 777
  const cleaned = plate.replace(/\s+/g, '').toUpperCase()

  if (cleaned.length === 8 || cleaned.length === 9) {
    // Старый формат: А123АА77 или А123АА777
    const match = cleaned.match(/^([А-ЯA-Z])(\d{3})([А-ЯA-Z]{2})(\d{2,3})$/)
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`
    }
  }

  // Новый формат или другие форматы - возвращаем как есть
  return plate.toUpperCase()
}

export function formatVin(vin: string): string {
  // VIN обычно показывают группами по 3 символа
  return vin.toUpperCase().replace(/(.{3})(?=.)/g, '$1 ')
}

export function getCarAge(car: ICar): number {
  const now = new Date()
  return now.getFullYear() - car.year
}

export function getCarAgeText(car: ICar): string {
  const age = getCarAge(car)
  if (age === 0) {
    return 'Новый'
  }
  if (age === 1) {
    return '1 год'
  }
  if (age < 5) {
    return `${age} года`
  }
  return `${age} лет`
}
