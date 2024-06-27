import React from 'react'
import HimnoLayout from '../../Template/HimnoLayout'

interface HimnoProps {
  route: any
}

const Himno = ({route}: HimnoProps) => {
  const {letter, title} = route.params
  return <HimnoLayout params={{letter, title}} />
}

export default Himno
