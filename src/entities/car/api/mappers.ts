// Data mappers for car entity
import type { ICar, ICarFormData } from '../model'

// Map API response to Car entity
export function mapApiToCar(apiData: unknown): ICar {
  const data = apiData as Record<string, unknown>
  return {
    id: String(data.id),
    brand: String(data.brand),
    model: String(data.model),
    year: Number(data.year),
    vin: String(data.vin),
    mileage: Number(data.mileage),
    licensePlate: String(data.licensePlate),
    imageUrl: data.imageUrl ? String(data.imageUrl) : undefined,
    purchaseDate: data.purchaseDate
      ? new Date(data.purchaseDate as string)
      : undefined,
    nextServiceDate: data.nextServiceDate
      ? new Date(data.nextServiceDate as string)
      : undefined,
    nextServiceMileage: data.nextServiceMileage
      ? Number(data.nextServiceMileage)
      : undefined,
    fuelType: data.fuelType as ICar['fuelType'],
    engineVolume: data.engineVolume ? Number(data.engineVolume) : undefined,
    createdAt: new Date(data.createdAt as string),
    updatedAt: new Date(data.updatedAt as string),
  }
}

// Map Car entity to API payload
export function mapCarToApi(car: ICar): Record<string, unknown> {
  return {
    id: car.id,
    brand: car.brand,
    model: car.model,
    year: car.year,
    vin: car.vin,
    mileage: car.mileage,
    licensePlate: car.licensePlate,
    imageUrl: car.imageUrl,
    purchaseDate: car.purchaseDate?.toISOString(),
    nextServiceDate: car.nextServiceDate?.toISOString(),
    nextServiceMileage: car.nextServiceMileage,
    fuelType: car.fuelType,
    engineVolume: car.engineVolume,
    createdAt: car.createdAt.toISOString(),
    updatedAt: car.updatedAt.toISOString(),
  }
}

// Map form data to Car entity (for creating)
export function mapFormDataToCar(
  formData: ICarFormData
): Omit<ICar, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    brand: formData.brand,
    model: formData.model,
    year: formData.year,
    vin: formData.vin,
    mileage: formData.mileage,
    licensePlate: formData.licensePlate,
    imageUrl: formData.imageUrl || undefined,
    purchaseDate: formData.purchaseDate,
    fuelType: formData.fuelType,
    engineVolume: formData.engineVolume,
    nextServiceDate: undefined,
    nextServiceMileage: undefined,
  }
}

// Map Car entity to form data (for editing)
export function mapCarToFormData(car: ICar): ICarFormData {
  return {
    brand: car.brand,
    model: car.model,
    year: car.year,
    vin: car.vin,
    mileage: car.mileage,
    licensePlate: car.licensePlate,
    imageUrl: car.imageUrl || '',
    purchaseDate: car.purchaseDate,
    fuelType: car.fuelType,
    engineVolume: car.engineVolume,
  }
}

// Validate and normalize car data
export function normalizeCarData(data: unknown): Partial<ICar> {
  const normalized: Partial<ICar> = {}
  const input = data as Record<string, unknown>

  if (input.brand) {
    normalized.brand = String(input.brand).trim()
  }
  if (input.model) {
    normalized.model = String(input.model).trim()
  }
  if (input.year) {
    normalized.year = Number(input.year)
  }
  if (input.vin) {
    normalized.vin = String(input.vin).toUpperCase().replace(/\s+/g, '')
  }
  if (input.mileage) {
    normalized.mileage = Math.max(0, Number(input.mileage))
  }
  if (input.licensePlate) {
    normalized.licensePlate = String(input.licensePlate).toUpperCase().trim()
  }
  if (input.imageUrl) {
    normalized.imageUrl = String(input.imageUrl).trim()
  }
  if (input.purchaseDate) {
    normalized.purchaseDate = new Date(input.purchaseDate as string)
  }
  if (input.nextServiceDate) {
    normalized.nextServiceDate = new Date(input.nextServiceDate as string)
  }
  if (input.nextServiceMileage) {
    normalized.nextServiceMileage = Number(input.nextServiceMileage)
  }
  if (input.fuelType) {
    normalized.fuelType = input.fuelType as ICar['fuelType']
  }
  if (input.engineVolume) {
    normalized.engineVolume = Number(input.engineVolume)
  }

  return normalized
}
