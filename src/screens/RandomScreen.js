import React, { useContext } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Context } from '../context/Store';
import { Button as PaperButton } from 'react-native-paper';

import { displayRandom } from '../utility/Utility';

import TeamComponent from '../components/TeamComponent';

const RandomScreen = () => {

    const [state, dispatch] = useContext(Context);

    const teams = displayRandom(state.players, state.teams, state.playersPerTeam);

    console.log(teams);

    return (
        <ScrollView contentContainerStyle={styles.container}>

             {
                teams.map(el => {
                    return <TeamComponent teamNr={el.teamNr} players={el.players} />
                })
            }
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 20
    },
    list: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'red'
    },
    teams: {
        height: 53,
    },
    players: {
        fontSize: 23,
        textAlign: 'center',
    }
})

export default RandomScreen;