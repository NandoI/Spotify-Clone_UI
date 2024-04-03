import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../component/header'
import { tracks } from '../component/data/tracks'
import TrackList from '../component/trackList'
import Player from '../component/Player'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{
      backgroundColor:"black"
    }}>
        <Header title="Home"/>
        <View>
            <FlatList
            data={tracks}
            renderItem={({item}) => <TrackList track={item}/>}
            showsHorizontalScrollIndicator={false}
            />
         </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 })