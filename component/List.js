import React, { useEffect, useState } from 'react';
import { Text, 
  ActivityIndicator, 
  Pressable, 
  Modal, 
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import LanguagesModal from './LanguagesModal';

const List = () => {
  const [countries, setCountries] = useState()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])

  if (!countries) {
    <ActivityIndicator />
  }

  // console.log(countries)
  return (
    <>
      {country &&
        <Modal
          animationType="slide"
          transparent={false}
          visible={country}
          onRequestClose={() => {
            Alert.alert("Modal closed")
            setCountry(!country)
          }}
        >
          <LanguagesModal country={country} />
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setCountry(!country)}
          >
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </Modal>
      }
      <FlatList 
        data={countries} 
        renderItem={({ item }) => (
          <Pressable onPress={() => setCountry(item)}>
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </>
  )
}

export default List

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})