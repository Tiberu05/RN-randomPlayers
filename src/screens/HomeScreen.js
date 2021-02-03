import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect, useContext } from 'react';
import {  StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

import { Context } from '../context/Store';

// COMPONENTS
import PickerSelect from '../components/PickerSelect';
import AddPlayer from '../components/AddPlayer';
import Filters from '../components/Filters';
import PlayersView from '../components/PlayersView';


const HomeScreen = ({ navigation }) => {

    const [state, dispatch] = useContext(Context);

    const windowHeight = Dimensions.get('screen').height;

    const handleSelect = (type, value) => {
        if (type === 'teams') {
            dispatch({ type: 'SET_TEAMS', payload: value})
        } else if (type === 'players') {
            dispatch({ type: 'SET_PLAYERS', payload: value})
        }
    };


    return (
        <ScrollView contentContainerStyle={{height: windowHeight + (state.players.length * 3)}} scrollEnabled={true}>

            <TouchableWithoutFeedback onPress={() => dispatch({ type: "HIDE_PICKER" })}>
                <View style={styles.contentContainer}>

                    <AddPlayer />

                    <PlayersView />

                    <Filters />

                    <View style={styles.bottomContainer}>
                        <PaperButton style={styles.generatorButton} mode='contained' color='#001f3f' onPress={() => {
                            if (state.players.length < state.teams * state.playersPerTeam) {
                                (state.teams * state.playersPerTeam) - (state.players.length) === 1 ? dispatch({ type: 'SET_ERROR', payload: 'You have to add 1 more player'}) : dispatch({ type: 'SET_ERROR', payload: `You have to ${(state.teams * state.playersPerTeam) - (state.players.length) } add more players`}); 
                            } else {
                                dispatch({ type: 'CLEAR_ERROR'})
                                navigation.navigate('Random');
                            }

                        }}>Generate Teams</PaperButton>

                        {
                            !state.error ? null : <Text style={{ color: 'red' }}>{state.error}</Text>
                        }
                    </View>
                
                    
                    

                </View>
            </TouchableWithoutFeedback>

            { !state.picker.display ? null : (

                <View>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', bottom: 200, backgroundColor: '#F0F0F0',}}>
                    <TouchableOpacity onPress={() => dispatch({ type: "HIDE_PICKER"})}>
                        <PaperButton color='#0074D9'>Done</PaperButton>
                    </TouchableOpacity>
                    </View>

                    <View style={{
                        position: 'absolute',
                        backgroundColor: '#F0F0F0',
                        height: 230,
                        width: '100%',
                        bottom: -30,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        opacity: 1
                    }}>
                        
                    
                    

                    { 
                        !state.picker.numberTeams ? null : (
                            <PickerSelect type='teams' selectedValue={state.teams} />   
                        )
                    }
                    {
                        !state.picker.numberPlayers ? null : (
                            <PickerSelect type='players' selectedValue={state.playersPerTeam} /> 
                        )
                    }

                    </View>
                </View>
            )}  

        
            
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    height: '90%',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  selectorContainer: {
    // position: 'absolute',
    // backgroundColor: 'lightgrey',
    // height: 170,
    // width: '100%',
    // bottom: 0,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // opacity: 1
  },
  generatorButton: {
      marginTop: 25,
  },
  bottomContainer: {
      paddingBottom: 20
  }
  
});

export default HomeScreen;
