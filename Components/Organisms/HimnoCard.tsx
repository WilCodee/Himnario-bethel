import {useNavigation} from '@react-navigation/core'
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import {NavigationType} from '../../Interfaces'

interface HimnoCardProps {
  title: string
  letter: string
  index: number
  video: boolean
  song: null | string
}

const HimnoCard = ({title, letter, video, song, index}: HimnoCardProps) => {
  const {navigate} = useNavigation<NavigationType>()
  const handlePress = () => {
    navigate('HimnoCurrent', {
      title,
      letter,
      song,
      index,
    })
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={tw`mb-3 flex flex-row justify-between border rounded-md p-1 border-gray-400`}>
      <Text>{title}</Text>
      <View style={tw`flex flex-row`}>
        <Icon size={20} style={tw`mr-1`} name='description' />
        {video && (
          <Icon style={tw`mr-1`} size={20} name='film' type='font-awesome-5' />
        )}
        {Boolean(song) && (
          <Icon style={tw`mr-1`} size={20} name='music' type='font-awesome-5' />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default HimnoCard
