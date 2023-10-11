import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

// ROTAS
import Home from '../screens/home/Home'
import Posts from '../screens/posts/Posts'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Router() {
    return (

        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>

                <Tab.Screen name='Home' component={Home} />
       
                <Tab.Screen name='Posts' component={Posts} />

            </Tab.Navigator>

        </NavigationContainer>

    )
}
