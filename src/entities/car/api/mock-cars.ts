// Mock data for car entity
import type { ICar } from '../model'

export const mockCars: ICar[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    year: 2018,
    vin: 'JTNB11HK803000000',
    mileage: 45230,
    licensePlate: 'А123АА777',
    imageUrl:
      'https://via.placeholder.com/300x200/007AFF/FFFFFF?text=Toyota+Camry',
    purchaseDate: undefined,
    nextServiceDate: undefined,
    nextServiceMileage: undefined,
    fuelType: 'petrol',
    engineVolume: 2.5,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2025-01-15'),
  },
  {
    id: '2',
    brand: 'Hyundai',
    model: 'Solaris',
    year: 2020,
    vin: 'KMHDN41BPJU000000',
    mileage: 28900,
    licensePlate: 'В456ВВ888',
    imageUrl:
      'https://via.placeholder.com/300x200/34C759/FFFFFF?text=Hyundai+Solaris',
    purchaseDate: undefined,
    nextServiceDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
    nextServiceMileage: 45000,
    fuelType: 'petrol',
    engineVolume: 1.6,
    createdAt: new Date('2023-03-20'),
    updatedAt: new Date('2025-01-10'),
  },
  {
    id: '3',
    brand: 'BMW',
    model: 'X3',
    year: 2019,
    vin: 'WBAVM1C53EVW00000',
    mileage: 67890,
    licensePlate: 'Е789ЕЕ999',
    imageUrl: undefined,
    purchaseDate: undefined,
    nextServiceDate: undefined,
    nextServiceMileage: undefined,
    fuelType: 'diesel',
    engineVolume: 2.0,
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2025-01-08'),
  },
]

// Mock API functions
export const getCars = async (): Promise<ICar[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  return mockCars
}

export const getCarById = async (id: string): Promise<ICar | null> => {
  await new Promise(resolve => setTimeout(resolve, 200))
  const foundCar = mockCars.find(car => car.id === id)
  return foundCar || null
}

export const createCar = async (
  carData: Omit<ICar, 'id' | 'createdAt' | 'updatedAt'>
): Promise<ICar> => {
  await new Promise(resolve => setTimeout(resolve, 500))

  const newCar: ICar = {
    id: Date.now().toString(),
    brand: carData.brand,
    model: carData.model,
    year: carData.year,
    vin: carData.vin,
    mileage: carData.mileage,
    licensePlate: carData.licensePlate,
    imageUrl: carData.imageUrl,
    purchaseDate: carData.purchaseDate,
    nextServiceDate: carData.nextServiceDate,
    nextServiceMileage: carData.nextServiceMileage,
    fuelType: carData.fuelType,
    engineVolume: carData.engineVolume,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  mockCars.push(newCar)
  return newCar
}

export const updateCar = async (
  id: string,
  updates: Partial<ICar>
): Promise<ICar | null> => {
  await new Promise(resolve => setTimeout(resolve, 400))

  const carIndex = mockCars.findIndex(car => car.id === id)
  if (carIndex === -1) {
    return null
  }

  const existingCar = mockCars[carIndex]!
  const updatedCar: ICar = {
    id: existingCar.id,
    brand: updates.brand ?? existingCar.brand,
    model: updates.model ?? existingCar.model,
    year: updates.year ?? existingCar.year,
    vin: updates.vin ?? existingCar.vin,
    mileage: updates.mileage ?? existingCar.mileage,
    licensePlate: updates.licensePlate ?? existingCar.licensePlate,
    imageUrl: updates.imageUrl ?? existingCar.imageUrl,
    purchaseDate: updates.purchaseDate ?? existingCar.purchaseDate,
    nextServiceDate: updates.nextServiceDate ?? existingCar.nextServiceDate,
    nextServiceMileage:
      updates.nextServiceMileage ?? existingCar.nextServiceMileage,
    fuelType: updates.fuelType ?? existingCar.fuelType,
    engineVolume: updates.engineVolume ?? existingCar.engineVolume,
    createdAt: existingCar.createdAt,
    updatedAt: new Date(),
  }

  mockCars[carIndex] = updatedCar

  return updatedCar
}

export const deleteCar = async (id: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 300))

  const carIndex = mockCars.findIndex(car => car.id === id)
  if (carIndex === -1) {
    return false
  }

  mockCars.splice(carIndex, 1)
  return true
}
