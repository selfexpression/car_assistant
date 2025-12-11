// Main dashboard component
import React from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useDashboardData } from './queries'
import { useDashboardState } from './hooks'
import { HeaderSection, CarCarousel, AlertsSection, RecentActivity } from './ui'
import { BottomActionsBar } from '../../shared/ui'
import { styles } from './styles'
import { BOTTOM_ACTIONS } from './model/constants'
import type { IAlert } from './model'

export function Dashboard() {
  const { data, isLoading, refetch, isRefetching } = useDashboardData()
  const { isAlertsExpanded, setRefreshing, toggleAlerts } = useDashboardState()

  const handleRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  const handleAlertPress = (alert: IAlert) => {
    // TODO: Navigate to appropriate screen based on alert type
    console.log('Alert pressed:', alert)
  }

  const handleBottomActionPress = (action: {
    id: string
    icon: string
    label: string
    route?: string
  }) => {
    // TODO: Navigate to appropriate screen based on bottom action
    console.log('Bottom action pressed:', action)
  }

  if (isLoading || !data) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <HeaderSection user={{ name: 'Пользователь' }} />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            tintColor="#007AFF"
            onRefresh={handleRefresh}
          />
        }
      >
        {/* Header */}
        <HeaderSection user={data.user} />

        {/* Content */}
        <View style={styles.content}>
          {/* Car Carousel */}
          <CarCarousel cars={data.cars} />

          {/* Alerts Section */}
          <AlertsSection
            alerts={data.alerts}
            isExpanded={isAlertsExpanded}
            onAlertPress={handleAlertPress}
            onToggleExpanded={toggleAlerts}
          />

          {/* Recent Activity */}
          <RecentActivity activities={data.recentActivity} />
        </View>
      </ScrollView>

      {/* Bottom Actions Bar */}
      <BottomActionsBar
        actions={BOTTOM_ACTIONS}
        onActionPress={handleBottomActionPress}
      />
    </SafeAreaView>
  )
}
