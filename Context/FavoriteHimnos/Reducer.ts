import {
  FavoriteHimnosActionType,
  InitialFavoriteData,
} from '../../Interfaces/Context/FavoriteHimnos'

export const favoriteHimnosReducer = (
  state: InitialFavoriteData,
  action: FavoriteHimnosActionType,
) => {
  console.log(state)
  switch (action.type) {
    case 'add':
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      }

    case 'remove':
      return {...state}

    default: {
      return state
    }
  }
}
