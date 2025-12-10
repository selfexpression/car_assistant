// Types for car entity
export interface ICar {
  id: string
  brand: string
  model: string
  year: number
  vin: string
  mileage: number
  licensePlate: string
  imageUrl: string | undefined
  purchaseDate: Date | undefined
  nextServiceDate: Date | undefined
  nextServiceMileage: number | undefined
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'
  engineVolume: number | undefined
  createdAt: Date
  updatedAt: Date
}

export interface ICarUpdate extends Partial<Omit<ICar, 'id' | 'createdAt'>> {
  updatedAt?: Date
}

export interface ICarFormData {
  brand: string
  model: string
  year: number
  vin: string
  mileage: number
  licensePlate: string
  imageUrl: string
  purchaseDate: Date | undefined
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'
  engineVolume: number | undefined
}

export interface ICarMetrics {
  totalMileage: number
  averageMileagePerMonth: number
  daysToNextService: number
  mileageToNextService: number
}
