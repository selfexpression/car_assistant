import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { Card } from '../../../../shared/ui'
import { formatTimeAgo, getActivityIcon } from '../../lib'
import type { IActivityItem } from '../../model'

interface IRecentActivityProps {
  activities: IActivityItem[]
}

export function RecentActivity({ activities }: IRecentActivityProps) {
  const renderActivity = ({ item }: { item: IActivityItem }) => (
    <View style={styles.activityItem}>
      <View style={styles.iconContainer}>
        <Ionicons color="#007AFF" name={getActivityIcon(item.type)} size={16} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
      </View>
      <Text style={styles.time}>{formatTimeAgo(item.date)}</Text>
    </View>
  )

  if (activities.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Недавняя активность</Text>
        <Card style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Нет недавней активности</Text>
        </Card>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Недавняя активность</Text>

      <Card style={styles.activityContainer}>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={activities}
          keyExtractor={item => item.id}
          renderItem={renderActivity}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </Card>
    </View>
  )
}
