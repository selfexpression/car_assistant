import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Dashboard } from '../pages/dashboard'

export type RootStackParamList = {
  Dashboard: undefined
  // Добавим позже другие экраны
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{
            title: 'Car Assistant',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
