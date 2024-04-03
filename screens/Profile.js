import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { FlatList } from 'react-native'
import React from 'react'
import TrackList from '../component/trackList'
import { tracks } from '../component/data/tracks'
import Header from '../component/header'

export default function Favorite(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:'#000000'
      }}>
        <Header title="Favorite"/>
      </View>
        <View style={styles.subContainer}>
            <FlatList
            data={tracks}
            renderItem={({item}) => <TrackList track={item}/>}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  subContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"black"

  }
 
})