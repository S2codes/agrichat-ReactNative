import { View, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import QueryCard from '../component/QueryCard'
import { Quaries } from '../../api/Quaries'


const Home = () => {


  const fetchQueries = () => {
    return Quaries.map(item => (
      <QueryCard key={item.id} data={item} />
    ))
  }

  return (
    <ScrollView style={styles.conatiner}>
      

      <View >
        { fetchQueries() }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#E4DCCF"
  }
})

export default Home