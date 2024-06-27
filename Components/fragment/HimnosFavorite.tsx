import React, {useContext, useEffect, useState} from 'react'
import {FavoriteHimnosContext} from '../../Context/FavoriteHimnos/Provider'
import {dataLetter} from '../../data'
import {Himnos} from '../../Interfaces/Context/FavoriteHimnos'
import Layout from '../Template/Layout'

const HimnosNumber = () => {
  const {state} = useContext(FavoriteHimnosContext)
  const [listFavorite, setListFavorite] = useState<Himnos[]>()
  useEffect(() => {
    console.log(state.favorite)

    if (state.favorite.length > 0) {
      const filtered: Himnos[] = []

      dataLetter.map(d => {
        state.favorite.map(f => {
          if (d.id === f.id) {
            filtered.push(d)
          }
        })
      })

      setListFavorite(filtered)
      return
    }
  }, [])

  return (
    <Layout
      text1='Favoritos'
      text2='Himnos'
      favorite
      favoriteData={listFavorite && listFavorite}
    />
  )
}

export default HimnosNumber
