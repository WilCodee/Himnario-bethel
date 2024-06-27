import {Dispatch} from 'react'

export interface Himnos {
  id: number
  title: string
  author: string
  letter: string
  video: boolean
  song: string
}

export interface FavoriteHimnos {
  id: number
}

export interface InitialFavoriteData {
  favorite: FavoriteHimnos[]
}

export type FavoriteHimnosContextType = {
  state: InitialFavoriteData
  dispatch: Dispatch<FavoriteHimnosActionType>
}

export type FavoriteHimnosActionType =
  | {
      type: 'add'
      payload: string
    }
  | {
      type: 'remove'
      payload: string
    }
