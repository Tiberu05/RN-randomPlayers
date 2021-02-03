import React, { useState, useContext } from 'react';
import { Context } from '../context/Store';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerSelect = ({ type }) => {

    const [selected, setSelected] = useState(1);
    const [state, dispatch] = useContext(Context);

    return (
        <Picker 
            selectedValue={selected}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => {
                setSelected(itemValue);
                if (type === 'teams') dispatch({ type: 'SET_TEAMS', payload: itemValue});
                if (type === 'players') dispatch({ type: 'SET_PLAYERS', payload: itemValue});
            }}>
            <Picker.Item label='1' value={1} />
            <Picker.Item label='2' value={2} />
            <Picker.Item label='3' value={3} />
            <Picker.Item label='4' value={4} />
            <Picker.Item label='5' value={5} />
            <Picker.Item label='6' value={6} />
            <Picker.Item label='7' value={7} />
            <Picker.Item label='8' value={8} />
        </Picker>
    )
};

const styles = StyleSheet.create({
    pickerStyle: {
        width: '100%',
        height: 100,
        marginTop: 0,
      },
})

export default PickerSelect;