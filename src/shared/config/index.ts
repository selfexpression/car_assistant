// Application configuration
export const CONFIG = {
  API_BASE_URL: 'https://api.car-assistant.com',
  APP_VERSION: '1.0.0',
  ENVIRONMENT: process.env.NODE_ENV || 'development',
} as const

// Feature flags
export const FEATURES = {
  ENABLE_NOTIFICATIONS: true,
  ENABLE_ANALYTICS: false,
  ENABLE_DEBUG_MODE: __DEV__,
} as const
