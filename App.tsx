import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screens/Home'
import Himnos from './Screens/Himnos'
import HimnoCurrent from './Screens/HimnoCurrent'
import FavoriteHimnosProvider from './Context/FavoriteHimnos/Provider'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <FavoriteHimnosProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='Himnos'
              component={Himnos}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='HimnoCurrent'
              component={HimnoCurrent}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </FavoriteHimnosProvider>
  )
}

export default App
