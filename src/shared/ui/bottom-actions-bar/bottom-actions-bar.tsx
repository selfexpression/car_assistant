import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

interface IAction {
  id: string
  icon: string
  label: string
  route?: string
}

interface IBottomActionsBarProps {
  actions: readonly IAction[]
  onActionPress?: (action: IAction) => void
}

export function BottomActionsBar({
  actions,
  onActionPress,
}: IBottomActionsBarProps) {
  const handleActionPress = (action: IAction) => {
    onActionPress?.(action)
  }

  return (
    <BlurView intensity={80} style={styles.blurContainer} tint="light">
      <SafeAreaView edges={['bottom']} style={styles.safeArea}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {actions.map(action => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={action.id}
              style={styles.actionItem}
              onPress={() => handleActionPress(action)}
            >
              <View style={styles.iconContainer}>
                <Ionicons
                  color="#007AFF"
                  name={action.icon as keyof typeof Ionicons.glyphMap}
                  size={20}
                />
              </View>
              <Text numberOfLines={1} style={styles.actionLabel}>
                {action.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </BlurView>
  )
}
