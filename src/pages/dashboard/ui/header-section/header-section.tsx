import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'
import type { IUserInfo } from '../../model'

interface IHeaderSectionProps {
  user: IUserInfo
}

export function HeaderSection({ user }: IHeaderSectionProps) {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Добрый день, {user.name}</Text>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  )
}
