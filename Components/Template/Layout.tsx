import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import {Icon, Input} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import {dataLetter} from '../../data'
import {Himnos} from '../../Interfaces/Context/FavoriteHimnos'
import HimnoCard from '../Organisms/HimnoCard'
import HimnoCardFavorite from '../Organisms/HimnoCardFavorite'
import HimnoCardTags from '../Organisms/HimnoCardTags'
import HimnoCardNumber from './../Organisms/HimnoCardNumber'

interface LayoutProps {
  text1: string
  text2: string
  placeholder?: string
  card?: boolean
  number?: boolean
  tags?: boolean
  favorite?: boolean
  favoriteData?: Himnos[]
}

const Layout = ({
  text1,
  text2,
  placeholder,
  card,
  number,
  tags,
  favorite,
  favoriteData,
}: LayoutProps) => {
  const [value, setValue] = useState('')
  const [himnoLetter, setHimnoLetter] = useState(dataLetter)

  const filteredData = () => {
    if (value.length === 0) {
      setHimnoLetter(dataLetter)
      return
    }
    const dataFiltered = dataLetter.filter(data => data.title.includes(value))
    setHimnoLetter(dataFiltered)
  }

  useEffect(() => {
    filteredData()
  }, [value])

  return (
    <View style={tw`flex m-3`}>
      <View style={tw`mt-5`}>
        <Text style={tw`text-3xl`}>{text1}</Text>
        <Text style={tw`text-2xl font-bold`}>{text2}</Text>
      </View>
      {tags ? null : favorite ? null : (
        <View style={tw`mt-5`}>
          <Input
            onChangeText={value => setValue(value)}
            leftIcon={<Icon name='search' type='font-awesome-5' size={20} />}
            rightIcon={<Icon name='close' size={20} />}
            placeholder={placeholder}
          />
        </View>
      )}

      <ScrollView>
        <View>
          {card && (
            <View style={tw`px-4`}>
              {himnoLetter.map(himno => (
                <HimnoCard
                  key={himno.id}
                  index={himno.id}
                  title={himno.title}
                  song={himno.song}
                  video={himno.video}
                  letter={himno.letter}
                />
              ))}
            </View>
          )}
          {number && (
            <View style={tw`flex flex-row justify-center flex-wrap`}>
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
              <HimnoCardNumber number='1' />
            </View>
          )}
          {tags && (
            <View style={tw`mt-4 flex flex-row justify-center flex-wrap`}>
              <HimnoCardTags text='Some Text' />
              <HimnoCardTags text='Some Text' />
              <HimnoCardTags text='Some Text' />
              <HimnoCardTags text='Some Text' />
              <HimnoCardTags text='Some Text' />
              <HimnoCardTags text='Some Text' />
              <HimnoCardTags text='Some Text' />
            </View>
          )}
          {favorite && (
            <View style={tw`mt-4 px-4`}>
              {favoriteData?.length === 0 ? (
                <Text>No hay favoritos</Text>
              ) : (
                favoriteData?.map(favorite => (
                  <HimnoCardFavorite
                    key={favorite.id}
                    title={favorite.title}
                    author={favorite.author}
                    index={favorite.id}
                    song={Boolean(favorite.song)}
                  />
                ))
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default Layout
