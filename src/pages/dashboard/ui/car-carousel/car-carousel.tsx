import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { Card, MetricCard } from '../../../../shared/ui'
import { formatMileage } from '../../lib'
import type { ICar } from '../../../../entities/car/model'
import type { IMetricCard as MetricCardType } from '../../model'

interface ICarCarouselProps {
  cars: ICar[]
}

const { width: screenWidth } = Dimensions.get('window')

export function CarCarousel({ cars }: ICarCarouselProps) {
  const scrollViewRef = useRef<ScrollView>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCar = cars[activeIndex]
  const hasMultipleCars = cars.length > 1

  const handleScrollEnd = (event: {
    nativeEvent: { contentOffset: { x: number } }
  }) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const newIndex = Math.round(scrollPosition / screenWidth)
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < cars.length) {
      setActiveIndex(newIndex)
    }
  }

  const goToIndex = (index: number) => {
    if (index >= 0 && index < cars.length) {
      setActiveIndex(index)
      scrollViewRef.current?.scrollTo({
        x: index * screenWidth,
        animated: true,
      })
    }
  }

  const goToNext = () => {
    goToIndex(activeIndex + 1)
  }

  const goToPrevious = () => {
    goToIndex(activeIndex - 1)
  }

  if (!activeCar) {
    return (
      <Card style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Автомобили не найдены</Text>
      </Card>
    )
  }

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

      {/* Car Cards Carousel */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          contentContainerStyle={styles.scrollContent}
          ref={scrollViewRef}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
        >
          {cars.map((car, index) => {
            const carMetrics: MetricCardType[] = [
              {
                id: `today-mileage-${index}`,
                label: 'Сегодня',
                value: '0',
                unit: 'км',
              },
              {
                id: `total-mileage-${index}`,
                label: 'Пробег',
                value: formatMileage(car.mileage),
              },
              {
                id: `next-service-${index}`,
                label: 'ТО через',
                value: car.nextServiceDate
                  ? Math.ceil(
                      (car.nextServiceDate.getTime() - Date.now()) /
                        (1000 * 60 * 60 * 24)
                    ).toString()
                  : '—',
                unit: 'дн',
              },
            ]

            return (
              <View
                key={car.id}
                style={[styles.carCard, { width: screenWidth }]}
              >
                <View style={styles.carCardContent}>
                  <Card>
                    <Text style={styles.carName}>
                      {car.brand} {car.model} {car.year}
                    </Text>

                    {/* Metrics Grid */}
                    <View style={styles.metricsGrid}>
                      {carMetrics.map(metric => (
                        <MetricCard
                          key={metric.id}
                          metric={metric}
                          style={styles.metricCard}
                        />
                      ))}
                    </View>
                  </Card>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}
