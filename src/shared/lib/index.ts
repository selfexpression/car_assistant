// Constants
export const APP_CONFIG = {
  NAME: 'Car Assistant',
  VERSION: '1.0.0',
} as const

// Utility functions
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ru-RU')
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(amount)
}

// Async storage helpers
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  APP_SETTINGS: 'app_settings',
} as const
