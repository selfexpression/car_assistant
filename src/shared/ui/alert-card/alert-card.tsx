import React from 'react'
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import type { IAlert } from '../../../pages/dashboard/model'

interface IAlertCardProps {
  alert: IAlert
  style?: ViewStyle
  onPress?: () => void
}

export function AlertCard({ alert, style, onPress }: IAlertCardProps) {
  const { type, title, message } = alert

  const getIconName = () => {
    switch (type) {
      case 'critical':
        return 'warning'
      case 'warning':
        return 'alert-circle'
      case 'info':
        return 'information-circle'
      default:
        return 'information-circle'
    }
  }

  const getIconColor = () => {
    switch (type) {
      case 'critical':
        return '#FF3B30'
      case 'warning':
        return '#FF9500'
      case 'info':
        return '#007AFF'
      default:
        return '#007AFF'
    }
  }

  const CardComponent = onPress ? TouchableOpacity : View

  return (
    <CardComponent
      activeOpacity={0.7}
      style={[styles.container, styles[type], style]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons color={getIconColor()} name={getIconName()} size={20} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.message}>
          {message}
        </Text>
      </View>
      {onPress && (
        <View style={styles.arrowContainer}>
          <Ionicons color="#C7C7CC" name="chevron-forward" size={16} />
        </View>
      )}
    </CardComponent>
  )
}
