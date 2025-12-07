import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '../shared/ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  menu: {
    flex: 1,
    gap: 12,
  },
  menuButton: {
    marginBottom: 8,
  },
})

const handleCarsPress = () => {
  console.log('Мои автомобили')
}

const handleInspectionPress = () => {
  console.log('Техосмотр')
}

const handlePartsPress = () => {
  console.log('Запчасти')
}

const handleRepairPress = () => {
  console.log('Ремонт')
}

const handleDocumentsPress = () => {
  console.log('Документы')
}

const handleSettingsPress = () => {
  console.log('Настройки')
}

export function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>🚗 Car Assistant</Text>
          <Text style={styles.subtitle}>Ваш автомобильный помощник</Text>
        </View>

        <View style={styles.menu}>
          <Button
            style={styles.menuButton}
            title="Мои автомобили"
            onPress={handleCarsPress}
          />
          <Button
            style={styles.menuButton}
            title="Техосмотр"
            variant="secondary"
            onPress={handleInspectionPress}
          />
          <Button
            style={styles.menuButton}
            title="Запчасти"
            onPress={handlePartsPress}
          />
          <Button
            style={styles.menuButton}
            title="Ремонт"
            variant="secondary"
            onPress={handleRepairPress}
          />
          <Button
            style={styles.menuButton}
            title="Документы"
            onPress={handleDocumentsPress}
          />
          <Button
            style={styles.menuButton}
            title="Настройки"
            variant="outline"
            onPress={handleSettingsPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
