import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerSelect = ({ handleSelect, type}) => {

    const [selected, setSelected] = useState(1);

    return (
        <Picker 
            selectedValue={selected}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => {
                setSelected(itemValue);
                if (type === 'teams') handleSelect('teams', itemValue);
                if (type === 'players') handleSelect('players', itemValue);  
            }}>
            <Picker.Item label='1' value={1} />
            <Picker.Item label='2' value={2} />
            <Picker.Item label='3' value={3} />
            <Picker.Item label='4' value={4} />
            <Picker.Item label='5' value={5} />
            <Picker.Item label='6' value={5} />
            <Picker.Item label='7' value={5} />
            <Picker.Item label='8' value={5} />
        </Picker>
    )
};

const styles = StyleSheet.create({
    pickerStyle: {
        width: '100%',
        height: 100,
        marginTop: -20
      },
})

export default PickerSelect;