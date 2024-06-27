import React from 'react'
import {View, Text, Button} from 'react-native'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import {NavigationType} from '../Interfaces'

interface HomeScreenProps {
  navigation: NavigationType
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={tw`m-14`}>
      <View style={tw`flex flex-row justify-between`}>
        <Icon name='bars' color='black' type='font-awesome-5' />
        <Icon name='setting' color='black' type='antdesign' />
      </View>
      <View style={tw`pt-8 m-auto`}>
        <View>
          <Text style={tw`font-bold text-xl`}>Himnario</Text>
          <Text style={tw`text-gray-500`}>MMM</Text>
        </View>
      </View>
      <View style={tw`m-auto mt-96`}>
        <Button onPress={() => navigation.navigate('Himnos')} title='Himnos' />
        <Button
          onPress={() => navigation.navigate('HimnoCurrent')}
          title='Coros'
        />
        {/* <Button onPress={() => navigation.navigate('')} title='Acerca de' /> */}
      </View>
    </View>
  )
}

export default HomeScreen
