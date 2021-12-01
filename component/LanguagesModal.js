import React from "react"
import { Text } from "react-native"
import { FlatList } from 'react-native-gesture-handler'

const LanguagesModal = lang => {
  const languages = ({ item }) => {
    return (
     <Text>{item.name}</Text>
    )
  }

  console.log(lang)
  return (
    <>
      {/* <FlatList data={lang} renderItem={languages}></FlatList> */}
    </>
  )
}

export default LanguagesModal