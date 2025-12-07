import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomePage } from '../pages'

export type RootStackParamList = {
  Home: undefined
  // Добавим позже другие экраны
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
          component={HomePage}
          name="Home"
          options={{
            title: 'Car Assistant',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
