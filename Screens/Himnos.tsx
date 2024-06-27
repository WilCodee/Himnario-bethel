import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React, {useEffect} from 'react'
import {TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import HimnosFavorite from '../Components/fragment/HimnosFavorite'
import HimnosLetter from '../Components/fragment/HimnosLetter'
import HimnosNumber from '../Components/fragment/HimnosNumber'
import HimnosTag from '../Components/fragment/HimnosTag'
import {onBackPress} from '../Helpers/backPressHandler'
import {NavigationType} from '../Interfaces'

const Tab = createBottomTabNavigator()

interface HimnosProps {
  navigation: NavigationType
}

const GogetBack = () => null

const Himnos = ({navigation}: HimnosProps) => {
  function handleBackPress() {
    navigation.goBack()
    return true
  }
  useEffect(() => {
    onBackPress(handleBackPress)
  }, [])

  return (
    <Tab.Navigator initialRouteName='Search'>
      <Tab.Screen
        name='GoBack'
        component={GogetBack}
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={tw` ml-1 flex justify-center`}
              onPress={() => {
                navigation.goBack()
              }}>
              <Icon name='arrow-back' color='white' size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={HimnosLetter}
        options={{
          tabBarStyle: {backgroundColor: 'hsla(246, 100%, 35%, 1)'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon color={color} size={35} name='search' />
          ),
        }}
      />
      <Tab.Screen
        name='Number'
        component={HimnosNumber}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'hsla(246, 100%, 35%, 1)'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIcon: ({color}) => <Icon color={color} size={35} name='tag' />,
        }}
      />
      <Tab.Screen
        name='Tags'
        component={HimnosTag}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'hsla(246, 100%, 35%, 1)'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon size={35} color={color} name='local-offer' />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={HimnosFavorite}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'hsla(246, 100%, 25%, 1)'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon color={color} size={35} name='favorite-border' />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Himnos
