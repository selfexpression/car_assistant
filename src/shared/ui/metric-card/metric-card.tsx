import React from 'react'
import { View, Text, ViewStyle } from 'react-native'

import { styles } from './styles'
import type { IMetricCard as MetricCardType } from '../../../pages/dashboard/model'

interface IMetricCardProps {
  metric: MetricCardType
  style?: ViewStyle
}

export function MetricCard({ metric, style }: IMetricCardProps) {
  const { label, value, unit, trend } = metric

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>
          {value}
          {unit && <Text style={styles.unit}>{unit}</Text>}
        </Text>
        {trend && (
          <Text style={[styles.trend, styles[trend]]}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}
          </Text>
        )}
      </View>
    </View>
  )
}
