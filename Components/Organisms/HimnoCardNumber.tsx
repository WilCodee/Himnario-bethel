import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'

const HimnoCardNumber = ({number}: {number: string}) => {
  return (
    <TouchableOpacity>
      <Text style={tw`bg-gray-300 ml-2 mb-2 m-2 px-4 py-2 text-lg rounded-lg`}>
        {number}
      </Text>
    </TouchableOpacity>
  )
}

export default HimnoCardNumber
