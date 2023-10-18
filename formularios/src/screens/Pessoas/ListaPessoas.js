import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FAB } from 'react-native-paper'



export default function ListaPessoas(navigation) {

    const [pessoas, setPessoas] = useState([
        {
            nome: 'joe',
            idade: '14',
            altura: '189',
            peso: '50.5'
        },
        {
            nome: 'dave',
            idade: '20',
            altura: '174',
            peso: '85.5'
        }
    ])

  return (
    <View>
      <Text>Lista de Pessoas</Text>

      <FlatList
      data={pessoas}
      renderItem={({}) => (
        <>
            <Text>{item?.nome}</Text>
            <Text>{item?.idade}</Text>
            <Text>{item?.altura}</Text>
            <Text>{item?.peso}</Text>

        </>
      )}
      />

      <FAB
      icon="plus"
      style={styles.fab}
      onPress={()=> navigation.push('FormPessoas') }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})