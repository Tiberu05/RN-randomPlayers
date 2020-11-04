import React, { useState, useContext, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from '../context/Store';

import { addPlayer } from '../utility/Utility';

const AddPlayer = () => {

    const [state, dispatch] = useContext(Context);
    const [name, setName] = useState('');
    const textInput = useRef();

    return (
        <View style={styles.addView}>
            <TextInput
                style={styles.inputName}
                clearButtonMode='always'
                ref={textInput}
                onChangeText={playerName => setName(playerName)}
                blurOnSubmit={false}
                onSubmitEditing={(event) => addPlayer(state.players, event.nativeEvent.text, dispatch, textInput)}
                placeholder='Enter name here'
            />
            <TouchableOpacity title='Add Player' onPress={() => addPlayer(state.players, name, dispatch, textInput)}>
                <Text>Add Player</Text>
            </TouchableOpacity>
        </View>
        
    )
};

const styles = StyleSheet.create({
    addView: {
        flexDirection: 'row'
    },
    inputName: {
        textAlign: 'center',
        width: '50%',
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingBottom: 5,
        marginBottom: 10
      },
})

export default AddPlayer;