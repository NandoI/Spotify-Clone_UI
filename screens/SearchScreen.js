import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import TrackList from '../component/trackList'
import { tracks } from '../component/data/tracks'
import Icon from 'react-native-vector-icons/AntDesign'

export default function SearchScreen(){
    const [search, setSearch] = useState('')

    const filteredTracks = tracks.filter(track =>
        track.name.toLowerCase().includes(search.toLowerCase()) ||
        track.artists[0].name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor:'black', flex: 1 }}>
                <View style={styles.header}>
                    <Icon name="search1" size={16} color="white" />
                    <TextInput 
                        value={search}
                        onChangeText={text => setSearch(text)} 
                        placeholderTextColor="gray"
                        style={styles.input}
                        placeholder='what do you want to listen to?'
                    />
                    <Text 
                        onPress={() => setSearch('')}
                        style={{ color:'white' }}>
                        Cancel
                    </Text>
                </View>

                <FlatList
                    data={filteredTracks}
                    renderItem={({ item }) => <TrackList track={item} />}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        backgroundColor: '#121314',
        padding: 8,
        marginHorizontal: 10,
        borderRadius: 5,
        color: 'white'
    },
})
