import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { Card, MetricCard } from '../../../../shared/ui'
import { useCarCarousel } from '../../hooks'
import { formatMileage } from '../../lib'
import type { ICar } from '../../../../entities/car/model'
import type { IMetricCard as MetricCardType } from '../../model'

interface ICarCarouselProps {
  cars: ICar[]
}

// Component implementation

export function CarCarousel({ cars }: ICarCarouselProps) {
  const { activeIndex, activeCar, goToNext, goToPrevious, hasMultipleCars } =
    useCarCarousel(cars)

  if (!activeCar) {
    return (
      <Card style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Автомобили не найдены</Text>
      </Card>
    )
  }

  const metrics: MetricCardType[] = [
    {
      id: 'today-mileage',
      label: 'Сегодня',
      value: '0',
      unit: 'км',
    },
    {
      id: 'total-mileage',
      label: 'Пробег',
      value: formatMileage(activeCar.mileage),
    },
    {
      id: 'next-service',
      label: 'ТО через',
      value: activeCar.nextServiceDate
        ? Math.ceil(
            (activeCar.nextServiceDate.getTime() - Date.now()) /
              (1000 * 60 * 60 * 24)
          ).toString()
        : '—',
      unit: 'дн',
    },
  ]

  return (
    <View style={styles.container}>
      {/* Car Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          {hasMultipleCars ? 'Ваш автопарк' : 'Ваш автомобиль'}
        </Text>
        {hasMultipleCars && (
          <View style={styles.navigation}>
            <TouchableOpacity
              disabled={!hasMultipleCars}
              style={[styles.navButton, !hasMultipleCars && styles.disabled]}
              onPress={goToPrevious}
            >
              <Ionicons color="#007AFF" name="chevron-back" size={20} />
            </TouchableOpacity>

            <View style={styles.dots}>
              {cars.map((carItem, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === activeIndex && styles.activeDot,
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity
              disabled={!hasMultipleCars}
              style={[styles.navButton, !hasMultipleCars && styles.disabled]}
              onPress={goToNext}
            >
              <Ionicons color="#007AFF" name="chevron-forward" size={20} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Car Card */}
      <Card style={styles.carCard}>
        <Text style={styles.carName}>
          {activeCar.brand} {activeCar.model} {activeCar.year}
        </Text>

        {/* Metrics Grid */}
        <View style={styles.metricsGrid}>
          {metrics.map(metric => (
            <MetricCard
              key={metric.id}
              metric={metric}
              style={styles.metricCard}
            />
          ))}
        </View>
      </Card>
    </View>
  )
}
