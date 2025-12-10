// Constants for dashboard page
export const ALERT_TYPES = {
  CRITICAL: 'critical',
  WARNING: 'warning',
  INFO: 'info',
} as const

export const ACTIVITY_TYPES = {
  REPAIR: 'repair',
  FUEL: 'fuel',
  MILEAGE: 'mileage',
  SERVICE: 'service',
} as const

export const QUICK_ACTIONS = [
  {
    id: 'add-car',
    title: 'Добавить авто',
    icon: 'add-circle',
    route: 'AddCar',
    color: '#007AFF',
  },
  {
    id: 'add-repair',
    title: 'Добавить ремонт',
    icon: 'build',
    route: 'AddRepair',
    color: '#FF9500',
  },
  {
    id: 'add-fuel',
    title: 'Заправка',
    icon: 'local-gas-station',
    route: 'AddFuel',
    color: '#34C759',
  },
  {
    id: 'service',
    title: 'ТО',
    icon: 'engineering',
    route: 'Service',
    color: '#FF3B30',
  },
  {
    id: 'parts',
    title: 'Запчасти',
    icon: 'settings',
    route: 'Parts',
    color: '#AF52DE',
  },
  {
    id: 'documents',
    title: 'Документы',
    icon: 'description',
    route: 'Documents',
    color: '#007AFF',
  },
  {
    id: 'analytics',
    title: 'Статистика',
    icon: 'analytics',
    route: 'Analytics',
    color: '#FF9500',
  },
  {
    id: 'settings',
    title: 'Настройки',
    icon: 'settings',
    route: 'Settings',
    color: '#8E8E93',
  },
] as const

export const DASHBOARD_REFRESH_INTERVAL = 5 * 60 * 1000 // 5 minutes
export const RECENT_ACTIVITY_LIMIT = 7
export const ALERTS_LIMIT = 5
