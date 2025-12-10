// Car API functions
import type { ICar, ICarFormData } from '../model'
import { carFormDataSchema } from '../model'

// API base URL
const API_BASE_URL = 'https://api.car-assistant.com'

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API Request failed:', error)
    throw error
  }
}

// Car API functions (for now using mock data as fallback)
export const carApi = {
  // Get all cars
  async getCars(): Promise<ICar[]> {
    try {
      return await apiRequest<ICar[]>('/cars')
    } catch {
      // Fallback to mock data
      const { getCars } = await import('./mock-cars')
      return getCars()
    }
  },

  // Get car by ID
  async getCarById(id: string): Promise<ICar | null> {
    try {
      return await apiRequest<ICar>(`/cars/${id}`)
    } catch {
      // Fallback to mock data
      const { getCarById } = await import('./mock-cars')
      return getCarById(id)
    }
  },

  // Create new car
  async createCar(carData: ICarFormData): Promise<ICar> {
    // Validate data
    carFormDataSchema.parse(carData)

    const payload = {
      ...carData,
      // Convert dates to ISO strings if needed
      purchaseDate: carData.purchaseDate?.toISOString(),
    }

    try {
      return await apiRequest<ICar>('/cars', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
    } catch {
      // Fallback to mock data
      const { createCar } = await import('./mock-cars')
      return createCar({
        ...carData,
        nextServiceDate: undefined,
        nextServiceMileage: undefined,
      })
    }
  },

  // Update car
  async updateCar(
    id: string,
    updates: Partial<ICarFormData>
  ): Promise<ICar | null> {
    // Validate updates if needed
    if (Object.keys(updates).length > 0) {
      // Partial validation can be added here
    }

    const payload = {
      ...updates,
      // Convert dates to ISO strings if needed
      purchaseDate: updates.purchaseDate?.toISOString(),
    }

    try {
      return await apiRequest<ICar>(`/cars/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
      })
    } catch {
      // Fallback to mock data
      const { updateCar } = await import('./mock-cars')
      return updateCar(id, updates)
    }
  },

  // Delete car
  async deleteCar(id: string): Promise<boolean> {
    try {
      await apiRequest(`/cars/${id}`, {
        method: 'DELETE',
      })
      return true
    } catch {
      // Fallback to mock data
      const { deleteCar } = await import('./mock-cars')
      return deleteCar(id)
    }
  },
}
