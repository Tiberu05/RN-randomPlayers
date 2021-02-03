import React, { useState, useContext, useRef, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button as PaperButton, TextInput as PaperInput } from 'react-native-paper';
import { Context } from '../context/Store';

import { addPlayer } from '../utility/Utility';

const AddPlayer = () => {

    const [state, dispatch] = useContext(Context);
    const [name, setName] = useState('');
    const textInput = useRef();

    useEffect(() => {
        dispatch({ type: 'CLEAR_ERROR'})
    }, [name]);


    return (
        <View style={styles.addView}>
            <PaperInput
                mode='outlined'
                selectionColor='#001f3f'
                theme={{ colors: { primary: '#001f3f'}}}
                style={styles.inputName}
                clearButtonMode='always'
                ref={textInput}
                onChangeText={playerName => setName(playerName)}
                blurOnSubmit={false}
                onSubmitEditing={(event) => addPlayer(state.players, event.nativeEvent.text, dispatch, textInput)}
                placeholder='Enter name here'
            />
            <TouchableOpacity title='Add Player' onPress={() => addPlayer(state.players, name, dispatch, textInput)}>
                <PaperButton  style={styles.button} mode='outlined' color='#001f3f'>Add Player</PaperButton>
            </TouchableOpacity>
        </View>
        
    )
};

const styles = StyleSheet.create({
    addView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'flex-end',
        paddingVertical: 20
    },
    inputName: {
        textAlign: 'center',
        width: '40%',
        height: 35,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        height: 37
    }
})

export default AddPlayer;