import {BackHandler} from 'react-native'
export const onBackPress = (callback: () => boolean) => {
  BackHandler.addEventListener('hardwareBackPress', callback)
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', callback)
  }
}
