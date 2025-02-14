/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "@react-native-vector-icons/feather"
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import ShelfScreen from './src/screens/ShelfScreen';
import { lightTheme } from './src/styles/theme';
import { Text, View } from 'react-native';
import Header from './src/components/Header';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer
        
        >
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: lightTheme.accent,
                    tabBarInactiveTintColor: lightTheme.primary,
                    tabBarStyle: {
                        backgroundColor: lightTheme.secondary,
                    },
                    
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={
                      {tabBarIcon: ()=> <Icon name="home" color={lightTheme.primary} size={24}/> ,header:()=><Header backgroundColor={lightTheme.primary} title='Home'></Header>}
                      
                    }
                />
                <Tab.Screen
                    name="Add"
                    component={AddScreen}
                    options={
                      {tabBarIcon:()=><Icon name='plus' color={lightTheme.primary} size={24} />}
                    }
                    
                />
                <Tab.Screen
                    name="Shelf"
                    component={ShelfScreen}
                    options={
                      {
                        tabBarIcon:()=><Icon name="book" color={lightTheme.primary} size={24} />
                      }
                    }
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
