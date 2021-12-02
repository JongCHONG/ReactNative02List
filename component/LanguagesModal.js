import React from "react"
import { Text } from "react-native"
import { FlatList } from 'react-native-gesture-handler'

const LanguagesModal = props => {
  const { country } = props

  // console.log(country.languages)
  return (
    <>
      <FlatList 
        data={country.languages} 
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </>
  )
}

export default LanguagesModal