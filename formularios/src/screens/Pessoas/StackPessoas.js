import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


// Routes
import ListaPessoas from './ListaPessoas'
import FormPessoas from './FormPessoas'


const Stack = createStackNavigator

export default function StackPessoas() {
  return (
    <Stack.Navigator
    screenOption
    
    >
        <Stack.Screen name="Lista" component={ListaPessoas} />
        <Stack.Screen name="Form" component={FormPessoas} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})