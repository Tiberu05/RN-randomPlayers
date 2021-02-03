import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button as PaperButton } from 'react-native-paper'; 
import { Context } from '../context/Store';

const PlayersView = () => {

    const [state, dispatch] = useContext(Context);

    return (
        <View style={styles.playersView}>
            <View style={styles.playersViewHeader}>
                <PaperButton color='#001f3f'>Players: {state.players.length}</PaperButton>
                <TouchableOpacity style={styles.clearButton} onPress={() => dispatch({ type: "CLEAR_PLAYERS" })}>    
                    <PaperButton color='#001f3f'>Clear Players</PaperButton>
                </TouchableOpacity>
            </View> 
            <View style={styles.addedPlayers} >
                {
                    state.players.map(player => {
                        return (
                            <TouchableOpacity key={player} onPress={() => dispatch({ type: 'REMOVE_PLAYER', payload: player})}>
                                <Text style={{ fontSize: 20}}>{player}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
        
    )

};

const styles = StyleSheet.create({
    playersView: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center'
    },
    playersViewHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    clearButton: {        
    },
    addedPlayers: {
      width: '90%',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      alignItems: 'center'
    }
  });

  export default PlayersView;