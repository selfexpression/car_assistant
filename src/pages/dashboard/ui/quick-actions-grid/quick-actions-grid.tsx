import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import type { IQuickAction } from '../../model'

interface IQuickActionsGridProps {
  actions: IQuickAction[]
  onActionPress?: (action: IQuickAction) => void
}

const { width: screenWidth } = Dimensions.get('window')
const ITEM_SIZE = (screenWidth - 40 - 24) / 3 // 3 columns with padding

export function QuickActionsGrid({
  actions,
  onActionPress,
}: IQuickActionsGridProps) {
  const handleActionPress = (action: IQuickAction) => {
    onActionPress?.(action)
  }

  const getIconName = (icon: string): keyof typeof Ionicons.glyphMap => {
    // Map string icons to Ionicons names
    const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
      'add-circle': 'add-circle',
      build: 'build',
      'local-gas-station': 'water',
      engineering: 'construct',
      settings: 'settings',
      description: 'document-text',
      analytics: 'bar-chart',
    }
    return iconMap[icon] || 'help-circle'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Быстрые действия</Text>

      <View style={styles.grid}>
        {actions.map(action => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={action.id}
            style={[styles.actionItem, { width: ITEM_SIZE, height: ITEM_SIZE }]}
            onPress={() => handleActionPress(action)}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: action.color + '20' },
              ]}
            >
              <Ionicons
                color={action.color}
                name={getIconName(action.icon)}
                size={24}
              />
            </View>
            <Text numberOfLines={2} style={styles.actionLabel}>
              {action.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
