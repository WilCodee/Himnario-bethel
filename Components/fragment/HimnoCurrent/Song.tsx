import React from 'react'
import HimnoLayout from '../../Template/HimnoLayout'

const Song = ({route}: {route: any}) => {
  const {song, title} = route.params
  return <HimnoLayout params={{song, title}} />
}

export default Song
