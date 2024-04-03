import { StyleSheet, Text, TextInput, View, Switch, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
  const [staySignedIn, setStaySignedIn] = useState(false);
  const navigation = useNavigation()
  const signIn = () => {
    navigation.navigate('main')
  }

  return (
      <SafeAreaView style={{
        backgroundColor:'#121314',
        flex:1
      }}>
        <View style={styles.container}>
          <Icon
            style={{ 
                textAlign: "center",
                marginTop:150
            
            }}
            name="spotify"
            size={60}
            color="#1DB954"
          />
          <Text style={styles.text}>Spotify</Text>
        </View>
        <View>
          <TextInput
            placeholder="Username"
            placeholderTextColor='black' 
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor='black' 
            style={styles.input}
            secureTextEntry={true}
          />
          <View style={styles.checkboxContainer}>
            <Switch
              value={staySignedIn}
              onValueChange={setStaySignedIn}
            />
            <Text style={styles.label}>Stay signed in</Text>
          </View>
          <Pressable 
          onPress={signIn}
          style={styles.subPress}
          >
            <Text style={{
                color:'black',
                fontWeight:500
            }}>
                Sign In
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
  )
}

export default SignIn
  
const styles = StyleSheet.create({
  container: {
    height: 300,
    flexDirection: 'row',  
    alignItems: 'center',   
    justifyContent: 'center', 
  },
  text: {
    marginTop:150,
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold', 
  },
  input: {
    backgroundColor:'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 30,
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop:10,
  },
  label: {
    color: 'white',
    marginLeft: 8,
  },
  subPress:{
    backgroundColor:'#1DB954',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    marginTop:20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  }
});
