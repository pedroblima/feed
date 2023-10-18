import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, TextInput } from 'react-native-paper'

export default function FormPessoas(navigation, route) {
    return (
        <View style={styles.container}>

            <Text variant='titleLarge' style={styles.title}>Adicionar Pessoas</Text>

            <TextInput
                style={styles.input}
                label={'nome'}
                mode='outlined'

            />
            <TextInput
                style={styles.input}
                label={'Idade'}
                mode='outlined'

            />
            <TextInput
                style={styles.input}
                label={'peso'}
                mode='outlined'

            />
            <TextInput
                style={styles.input}
                label={'Altura'}
                mode='outlined'

            />
            <View style={styles.buttonContainer}>
                <Button 

                mode='contained-tonal'
                onPress={() => navigation.goBack()}
                >
                    Voltar
                    </Button>
                <Button 

                mode='contained'>
                    Salvar
                    </Button>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    input: {
        widht: '90%',
        margin: 10,
    },
    buttonContainer:{
        flexDirection:'row',
        widht: '90%',
        gap: 1
    },
    button: {
        flex: 1,
    }
})