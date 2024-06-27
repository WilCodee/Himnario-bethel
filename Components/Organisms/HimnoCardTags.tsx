import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'

interface HimnoCardTagsProps {
  text: string
}

const HimnoCardTags = ({text}: HimnoCardTagsProps) => {
  return (
    <TouchableOpacity
      style={tw`flex items-center border border-gray-400 rounded-lg w-40 py-3 mb-3 mr-3`}>
      <Icon name='local-offer' type='material' size={40} />
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default HimnoCardTags
