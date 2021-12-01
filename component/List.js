import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Pressable, Modal, Alert } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import LanguagesModal from './LanguagesModal';

const List = () => {
  const [countries, setCountries] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])

  if (!countries) {
    <ActivityIndicator />
  }

  const Country = ({ item }) => {
    return (
      <>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal closed")
            setIsModalVisible(!isModalVisible)
          }}
        >
          <LanguagesModal lang={item.languages} />
          <Pressable onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text>Hide Modal</Text>
          </Pressable>
        </Modal>

        <Pressable onPress={() => setIsModalVisible(true)}>
          <Text>{item.name}</Text>
        </Pressable>
      </>
    )
  }

  // console.log(countries)
  return (
    <FlatList data={countries} renderItem={Country}></FlatList>
  )
}

export default List