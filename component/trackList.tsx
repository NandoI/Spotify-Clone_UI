import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Track } from './data/types'
import { usePlayerContext } from '../providers/playerProvide'

type TrackListProps ={
    track: Track
}

export default function TrackList({track}: TrackListProps) {
    const {setTrack} = usePlayerContext()

  return (
    <Pressable onPress={() => setTrack(track)} style={styles.container}>
        <Image 
            source={{ uri: track.album.images[0]?.url}} 
            style={styles.image}
        />
        <View>
            <Text style={styles.title}>{track.name}</Text>
            <Text style={styles.subtitle}>{track.artists[0].name}</Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        padding:5,
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontWeight:'500',
        fontSize:16
    },
    subtitle:{
        color:'gray'
    },
    image:{
        width:50,
        aspectRatio:1,
        borderRadius: 5,
        marginRight: 18,
    }
})
