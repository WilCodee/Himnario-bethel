import React from 'react'
import {View, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

interface HimnoCardFavoriteProps {
  title: string
  author: string
  index: number
  video?: boolean
  song?: boolean
}

const HimnoCardFavorite = ({
  title,
  author,
  index,
  video,
  song,
}: HimnoCardFavoriteProps) => {
  return (
    <View
      style={tw`border border-gray-400 mb-3 flex flex-row justify-between rounded-lg px-3 py-2`}>
      <View>
        <Text>{title}</Text>
        <Text>{author}</Text>
      </View>
      <View style={tw`flex items-end`}>
        <Text style={tw`bg-green-400 px-3 py-1 rounded-lg mb-1 text-center`}>
          {index}
        </Text>

        <View style={tw`flex flex-row`}>
          <Icon size={18} style={tw`mr-1`} name='description' type='material' />

          {video && (
            <Icon
              style={tw`mr-1`}
              size={18}
              name='film'
              type='font-awesome-5'
            />
          )}
          {song && (
            <Icon
              style={tw`mr-1`}
              size={18}
              name='music'
              type='font-awesome-5'
            />
          )}
        </View>
      </View>
    </View>
  )
}

export default HimnoCardFavorite
