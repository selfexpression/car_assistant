// Custom hook for dashboard local state management
import { useState, useCallback } from 'react'

export interface IDashboardState {
  activeCarIndex: number
  isAlertsExpanded: boolean
  isRefreshing: boolean
}

const initialState: IDashboardState = {
  activeCarIndex: 0,
  isAlertsExpanded: true,
  isRefreshing: false,
}

export function useDashboardState() {
  const [state, setState] = useState<IDashboardState>(initialState)

  const setActiveCarIndex = useCallback((index: number) => {
    setState((prev: IDashboardState) => ({ ...prev, activeCarIndex: index }))
  }, [])

  const toggleAlerts = useCallback(() => {
    setState((prev: IDashboardState) => ({
      ...prev,
      isAlertsExpanded: !prev.isAlertsExpanded,
    }))
  }, [])

  const setRefreshing = useCallback((refreshing: boolean) => {
    setState((prev: IDashboardState) => ({ ...prev, isRefreshing: refreshing }))
  }, [])

  const resetState = useCallback(() => {
    setState(initialState)
  }, [])

  return {
    ...state,
    setActiveCarIndex,
    toggleAlerts,
    setRefreshing,
    resetState,
  }
}
