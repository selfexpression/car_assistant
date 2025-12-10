// TanStack Query hook for dashboard data
import { useQuery } from '@tanstack/react-query'

import {
  mockDashboardData,
  mapCarsToAlerts,
  sortAlertsByPriority,
  sortActivityByDate,
  limitArray,
} from '../api'
import {
  DASHBOARD_REFRESH_INTERVAL,
  ALERTS_LIMIT,
  RECENT_ACTIVITY_LIMIT,
} from '../model'

// Mock API function - replace with real API call
async function fetchDashboardData(): Promise<typeof mockDashboardData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Generate alerts from cars data
  const generatedAlerts = mapCarsToAlerts(mockDashboardData.cars)
  const allAlerts = [...mockDashboardData.alerts, ...generatedAlerts]
  const sortedAlerts = sortAlertsByPriority(allAlerts)
  const limitedAlerts = limitArray(sortedAlerts, ALERTS_LIMIT)

  // Sort and limit activity
  const sortedActivity = sortActivityByDate(mockDashboardData.recentActivity)
  const limitedActivity = limitArray(sortedActivity, RECENT_ACTIVITY_LIMIT)

  return {
    ...mockDashboardData,
    alerts: limitedAlerts,
    recentActivity: limitedActivity,
  }
}

export function useDashboardData() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
    staleTime: DASHBOARD_REFRESH_INTERVAL,
    gcTime: DASHBOARD_REFRESH_INTERVAL * 2,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}
