import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Profile from "./screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import SearchScreen from "./screens/SearchScreen";
import Header from './component/header';
import Player from "./component/Player";
import { View } from "react-native";
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import PlayerProvider from './providers/playerProvide';
import SignIn from './screens/SignIn';

const Tab = createBottomTabNavigator();

function Bottom() {
    return (
        <View style={{ flex: 1 }}>
            <Player/>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle:{
                        backgroundColor:"#121314"
                    }
                }}
                tabBar={props => (
                    <View>
                        <Player />
                        <BottomTabBar {...props} />
                    </View>
                )}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarLabelStyle: { color: "white" },
                        tabBarLabel: "Home",
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon2 name="home" size={25} color="white" />
                            ) : (
                                <Icon name="home" size={25} color="white" />
                            )
                    }}
                />

                <Tab.Screen
                    name="Favorite"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarLabelStyle: { color: "white" },
                        tabBarLabel: "Favorite",
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon4 name="favorite" size={25} color="white" />
                            ) : (
                                <Icon4 name="favorite-outline" size={25} color="white" />
                            )
                    }}
                />
                <Tab.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                        tabBarLabelStyle: { color: "white" },
                        tabBarLabel: "Search",
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon3 name="search" size={25} color="white" />
                            ) : (
                                <Icon name="search1" size={25} color="white" />
                            )
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

const Stack = createNativeStackNavigator()
function Navigation() {
    return (
        <PlayerProvider>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: ({ Navigation, route }) => (
                        <Header title={route.name} />
                    )
                }}
            >
                <Stack.Screen name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="main"
                    component={Bottom}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="signin"
                    component={SignIn}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
        </PlayerProvider>
    )
}

export default Navigation;
