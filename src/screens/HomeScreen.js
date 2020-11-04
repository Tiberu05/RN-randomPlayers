import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect, useContext } from 'react';
import {  StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

import { Context } from '../context/Store';

// COMPONENTS
import PickerSelect from '../components/PickerSelect';
import AddPlayer from '../components/AddPlayer';

import { addPlayer } from '../utility/Utility';

const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

// const INITIAL_STATE = {
//     players: [],
//     teams: 1,
//     playersPerTeam: 1,
//     error: '',
// };

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "ADD_PLAYER":
//             return { ...state, players: [...state.players, action.payload] };
//         case "SET_TEAMS":
//             return { ...state, teams: action.payload }
//         case "SET_PLAYERS":
//             return { ...state, playersPerTeam: action.payload }
//         case "SET_ERROR":
//             return { ...state, error: action.payload }
//         case "CLEAR_ERROR":
//             return { ...state, error: ''}
//         default:
//             return state;
//     }
// }

// const addPlayer = (players, player, dispatch, textInput) => {
//     const newArr = players.map(el => el.toLowerCase());
//     const index = newArr.findIndex(el => el === player.toLowerCase());

//     if (player.length < 1) {
//         dispatch({ type: 'SET_ERROR', payload: 'Input field is empty'});
//     } else if (player.length > 0 && index !== -1) {
//         dispatch({ type: 'SET_ERROR', payload: 'Name already added'});
//     } else if (player.length > 0 && index === -1) {
//         dispatch({ type: 'ADD_PLAYER', payload: player })             
//         textInput.current.clear();
//         dispatch({ type: 'CLEAR_ERROR' }); 
//     }
// }

const HomeScreen = ({ navigation }) => {

    const [state, dispatch] = useContext(Context);

    const [name, setName] = useState('');
    const [showSelector, setShowSelector] = useState({ numberTeams: false, numberPlayers: false, display: false });
    const [error, setError] = useState('');
    const textInput = useRef();

    

    const handleSelect = (type, value) => {
        if (type === 'teams') {
            dispatch({ type: 'SET_TEAMS', payload: value})
        } else if (type === 'players') {
            dispatch({ type: 'SET_PLAYERS', payload: value})
        }
    };

    useEffect(() => {
        dispatch({ type: 'CLEAR_ERROR'})
    }, [name]);


    return (
        <ScrollView contentContainerStyle={styles.container}>

            <TouchableWithoutFeedback onPress={() => setShowSelector({ numberTeams: false, numberPlayers: false, display: false })}>
                <View style={styles.contentContainer}>
                {/* <TextInput
                    style={styles.inputName}
                    clearButtonMode='always'
                    ref={textInput}
                    onChangeText={playerName => setName(playerName)}
                    blurOnSubmit={false}
                    onSubmitEditing={(event) => addPlayer(state.players, event.nativeEvent.text, dispatch, textInput)}
                    placeholder='Enter name here'
                />
                <Button title='Add Player' onPress={() => addPlayer(state.players, name, dispatch, textInput)}/> */}

                <AddPlayer />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', fontWeight: '700'}}>
                    <TouchableOpacity onPress={() => setShowSelector({ numberTeams: true, numberPlayers: false, display: true })}>
                        
                        <PaperButton color='#001f3f'>Teams: {state.teams}</PaperButton>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowSelector({ numberTeams: false, numberPlayers: true, display: true })}>
                        <PaperButton color='#001f3f'>Players/Team: {state.playersPerTeam}</PaperButton> 
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.addedPlayers} >
                    {
                        state.players.map(player => {
                            return <Text key={player} style={{ fontSize: 15}}>{player}</Text>
                        })
                    }
                </View>
            

                <PaperButton mode='contained' color='#001f3f' onPress={() => {
                    const newArr = state.players.map(el => el);
                    shuffle(newArr);
                    if (state.players.length < state.teams * state.playersPerTeam) {
                        (state.teams * state.playersPerTeam) - (state.players.length) === 1 ? dispatch({ type: 'SET_ERROR', payload: 'You have to add 1 more player'}) : dispatch({ type: 'SET_ERROR', payload: `You have to ${(state.teams * state.playersPerTeam) - (state.players.length) } add more players`}); 
                    } else {
                        dispatch({ type: 'CLEAR_ERROR'})
                        navigation.navigate('Random', { players: newArr, teams: state.teams, playersPerTeam: state.playersPerTeam })
                    }

                }}>Generate Teams</PaperButton>

                {
                    !state.error ? null : <Text style={{ color: 'red' }}>{state.error}</Text>
                }
                
                </View>
            </TouchableWithoutFeedback>

            { !showSelector.display ? null : (
                <View style={styles.selectorContainer}>

                { 
                    !showSelector.numberTeams ? null : (
                        <PickerSelect type='teams' handleSelect={handleSelect} selectedValue={state.teams} />   
                    )
                }
                {
                    !showSelector.numberPlayers ? null : (
                        <PickerSelect type='players' handleSelect={handleSelect} selectedValue={state.playersPerTeam} /> 
                    )
                }

                </View>
            )}  

        
            
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
  contentContainer: {
    alignItems: 'center',
    height: '90%',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  addedPlayers: {
    width: '90%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center'

  },
  inputName: {
    textAlign: 'center',
    width: '50%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 5,
    marginBottom: 10
  },
  selectorContainer: {
    position: 'absolute',
    backgroundColor: 'lightgrey',
    height: 170,
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    opacity: 1
  }
  
});

export default HomeScreen;
