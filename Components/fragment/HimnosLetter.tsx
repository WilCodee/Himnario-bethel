import React from 'react'
import Layout from '../Template/Layout'

const HimnoLetter = () => {
  return (
    <Layout
      text1='Busqueda'
      text2='Alfabetica'
      placeholder='Titulo, palabra o Contenido'
      card
      tags={false}
    />
  )
}

export default HimnoLetter
