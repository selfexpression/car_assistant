import React from 'react'
import { View, ViewStyle } from 'react-native'

import { styles } from './styles'

interface ICardProps {
  children: React.ReactNode
  style?: ViewStyle
  padding?: 'none' | 'small' | 'medium' | 'large'
  shadow?: boolean
}

export function Card({
  children,
  style,
  padding = 'medium',
  shadow = true,
}: ICardProps) {
  const cardStyle = [
    styles.card,
    styles[padding],
    shadow && styles.shadow,
    style,
  ]

  return <View style={cardStyle}>{children}</View>
}
