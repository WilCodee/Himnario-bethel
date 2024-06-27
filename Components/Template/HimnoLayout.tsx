import React, {useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

type typeParams = {
  letter?: string
  title: string
  index?: number
  song?: string
}

interface HimnoProps {
  params: typeParams
  description?: boolean
}

const HimnoLayout = ({params, description}: HimnoProps) => {
  const {letter, title, index, song} = params
  const [fontSize, setFontSize] = useState(15)

  const incrementFontSize = () => {
    if (fontSize >= 25) return setFontSize(15)
    setFontSize(fontSize + 3)
  }

  const decrementFontSize = () => {
    if (fontSize < 16) return setFontSize(15)
    setFontSize(fontSize - 3)
  }

  return (
    <View style={tw`flex p-3`}>
      <View style={tw`flex flex-row justify-between mb-20`}>
        <View>
          <Text style={tw`text-2xl`}>{title}</Text>
          <Text style={tw`text-lg font-bold`}>
            {description ? 'Descripcion' : 'Letra'}
          </Text>
        </View>
        <View style={tw`self-end flex flex-row`}>
          {description ? (
            <View style={tw`bg-blue-500 -mt-8 py-1 px-3 rounded-lg`}>
              <Text style={tw`text-white`}>{index}</Text>
            </View>
          ) : (
            <>
              <Icon onPress={incrementFontSize} name='add-circle-outline' />
              <Icon onPress={decrementFontSize} name='remove-circle-outline' />
            </>
          )}
        </View>
      </View>
      <ScrollView>
        <View style={tw`mb-32`}>
          {description ? (
            <View style={tw`py-4 px-6 border border-gray-400 rounded-lg`}>
              <View style={tw`items-center flex flex-row `}>
                <Icon style={tw`mr-2 flex-row`} name='edit' />
                <View>
                  <Text style={tw`text-lg`}>juan peres</Text>
                  <Text style={tw`text-green-400 font-bold`}>Escritor</Text>
                </View>
              </View>
              <View style={tw`items-center flex flex-row `}>
                <Icon style={tw`mr-2 flex-row`} name='music-note' />
                <View>
                  <Text style={tw`text-lg`}>juan peres</Text>
                  <Text style={tw`text-green-400 font-bold`}>Compositor</Text>
                </View>
              </View>
            </View>
          ) : Boolean(song) ? (
            <Text style={{fontSize: fontSize}}>{song}</Text>
          ) : (
            <View>
              <Text
                style={{
                  fontSize: fontSize,
                  textAlign: 'center',
                  padding: 50,
                }}>
                {letter}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default HimnoLayout
