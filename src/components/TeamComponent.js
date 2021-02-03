import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

const TeamComponent = ({teamNr, players}) => {

    console.log(teamNr);

    return (
        <View style={styles.teams}>
            <PaperButton color='#001f3f' contentStyle={styles.teamHeader}>Team {teamNr}</PaperButton>
            {
                players.map(el => {
                    return <Text style={styles.players}>{el}</Text>
                })
            }
        </View>
    )
};

const styles = StyleSheet.create({
    teams: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#001f3f',
        marginBottom: 10,
        borderRadius: 10,
    },
    teamHeader: {
        borderBottomWidth: 1,
        backgroundColor: 'lightgrey'
    },
    players: {
        fontSize: 23,
        textAlign: 'center',
        padding: 5
    }
})

export default TeamComponent;