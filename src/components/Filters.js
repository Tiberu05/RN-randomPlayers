import React, { useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { Context } from '../context/Store';

const Filters = () => {

    const [state, dispatch] = useContext(Context);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontWeight: '700', marginTop: 25}}>
            <TouchableOpacity onPress={() => dispatch({ type: "DISPLAY_TEAMS_PICKER"})}>    
                <PaperButton mode='outlined' color='#001f3f'>Teams: {state.teams}</PaperButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch({ type: "DISPLAY_PLAYERS_PICKER"})}>
                <PaperButton mode='outlined' color='#001f3f'>Players/Team: {state.playersPerTeam}</PaperButton> 
            </TouchableOpacity>
            
        </View>
    )
};

export default Filters;