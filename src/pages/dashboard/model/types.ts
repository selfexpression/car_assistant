// Types for dashboard page
import type { ICar } from '../../../entities/car/model'

export interface IUserInfo {
  name: string
  avatar?: string
}

export interface IAlert {
  id: string
  type: 'critical' | 'warning' | 'info'
  title: string
  message: string
  carId?: string
  dueDate: Date
  actionType?: string
}

export interface IActivityItem {
  id: string
  type: 'repair' | 'fuel' | 'mileage' | 'service'
  title: string
  description: string
  date: Date
  carId: string
  amount?: number
}

export interface IDashboardData {
  user: IUserInfo
  cars: ICar[]
  alerts: IAlert[]
  recentActivity: IActivityItem[]
}

export interface IMetricCard {
  id: string
  label: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down' | 'neutral'
}
