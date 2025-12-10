import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { AlertCard } from '../../../../shared/ui'
import type { IAlert } from '../../model'

interface IAlertsSectionProps {
  alerts: IAlert[]
  isExpanded: boolean
  onToggleExpanded: () => void
  onAlertPress?: (alert: IAlert) => void
}

export function AlertsSection({
  alerts,
  isExpanded,
  onToggleExpanded,
  onAlertPress,
}: IAlertsSectionProps) {
  const handleAlertPress = (alert: IAlert) => {
    onAlertPress?.(alert)
  }

  const renderAlert = ({ item }: { item: IAlert }) => (
    <AlertCard alert={item} onPress={() => handleAlertPress(item)} />
  )

  if (alerts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Уведомления</Text>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Нет активных уведомлений</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.header}
        onPress={onToggleExpanded}
      >
        <Text style={styles.title}>Уведомления</Text>
        <View style={styles.headerRight}>
          <Text style={styles.count}>{alerts.length}</Text>
          <Ionicons
            color="#8E8E93"
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={16}
          />
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <FlatList
          data={alerts}
          keyExtractor={item => item.id}
          renderItem={renderAlert}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}
