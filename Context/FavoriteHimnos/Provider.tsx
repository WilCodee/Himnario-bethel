import React, {createContext, ReactNode, useReducer} from 'react'
import {favoriteHimnosData} from '../../data'
import {
  FavoriteHimnosContextType,
  // InitialFavoriteData,
} from '../../Interfaces/Context/FavoriteHimnos'
// import {favoriteHimnosReducer} from './Reducer'

import {
  FavoriteHimnosActionType,
  InitialFavoriteData,
} from '../../Interfaces/Context/FavoriteHimnos'

export const favoriteHimnosReducer = (
  state: any,
  action: FavoriteHimnosActionType,
) => {
  switch (action.type) {
    case 'add':
      console.log({add: state})
      return {
        ...state,
        favorite: state.favorite.concat({id: action.payload}),
      }

    case 'remove':
      console.log({rm: state})
      return {
        ...state,
        favorite: state.favorite.filter((f: any) => f.id !== action.payload),
      }

    default: {
      return state
    }
  }
}

export const FavoriteHimnosContext = createContext(
  {} as FavoriteHimnosContextType,
)

const initialData: InitialFavoriteData = {
  favorite: favoriteHimnosData,
}

const FavoriteHimnosProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(favoriteHimnosReducer, initialData)
  return (
    <FavoriteHimnosContext.Provider value={{state, dispatch}}>
      {children}
    </FavoriteHimnosContext.Provider>
  )
}

export default FavoriteHimnosProvider
