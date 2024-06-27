import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react'
import {TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Description from '../Components/fragment/HimnoCurrent/Description'
import Himno from '../Components/fragment/HimnoCurrent/Himno'
import Song from '../Components/fragment/HimnoCurrent/Song'
import {FavoriteHimnosContext} from '../Context/FavoriteHimnos/Provider'
import {onBackPress} from '../Helpers/backPressHandler'
import {NavigationType} from '../Interfaces'

const Tab = createBottomTabNavigator()

interface HimnosProps {
  navigation: NavigationType
  route: any
}

const GogetBack = () => null
const Favorite = () => null

const HimnoCurrent = ({navigation, route}: HimnosProps) => {
  const [addFavorite, setAddFavorite] = useState<boolean>()
  const {state, dispatch} = useContext(FavoriteHimnosContext)
  const {title, letter, song, index} = route.params

  function handleBackPress() {
    navigation.goBack()
    return true
  }

  useLayoutEffect(() => {
    if (state.favorite.length > 0) {
      state.favorite.map(f => {
        if (f.id === index) {
          setAddFavorite(false)
          return
        }
        setAddFavorite(true)
      })
      return
    }
    setAddFavorite(true)
  }, [])

  useEffect(() => {
    onBackPress(handleBackPress)
  }, [])

  return (
    <Tab.Navigator initialRouteName='Himno'>
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
        name='Description'
        initialParams={{title, letter, song, index}}
        component={Description}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'hsla(246, 100%, 35%, 1)'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon size={35} color={color} name='widgets' />
          ),
        }}
      />
      <Tab.Screen
        name='Himno'
        initialParams={{title, letter, song}}
        component={Himno}
        options={{
          tabBarStyle: {backgroundColor: 'hsla(246, 100%, 35%, 1)'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon color={color} size={35} name='description' />
          ),
        }}
      />
      {Boolean(song) && (
        <Tab.Screen
          name='Song'
          initialParams={{title, song}}
          component={Song}
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: 'hsla(246, 100%, 35%, 1)'},
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon color={color} size={35} name='music-note' />
            ),
          }}
        />
      )}
      <Tab.Screen
        name='FavoriteGet'
        component={Favorite}
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={tw` mr-1 flex justify-center`}
              onPress={() => {
                if (addFavorite) {
                  setAddFavorite(false)
                  dispatch({type: 'add', payload: index})
                  return
                }
                setAddFavorite(true)
                dispatch({type: 'remove', payload: index})
              }}>
              {addFavorite ? (
                <Icon name='favorite-border' color='white' size={30} />
              ) : (
                <Icon name='favorite' color='white' size={30} />
              )}
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default HimnoCurrent
