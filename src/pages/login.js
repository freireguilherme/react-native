import React, {useState} from 'react'
import { KeyboardAvoidingView, Text, Platform, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30
    },

    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4, 
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default function Login( {navigation} ){
    const [user, setUser] = useState('');
   async function handleLogin(){
        const response = await api.get('/devs/', {username: user} )
        
        const { _id } = response.data;

        console.log(_id);
        navigation.navigate('Main', {_id});
    }

    return( 
        <KeyboardAvoidingView 
        behavior='padding'
        enabled={Platform.OS === 'ios'}
        style={styles.container}>
            <Image source={logo} />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Digite seu user do Git"
                style={styles.input}
                placeholderTextColor= "#999"
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}