import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const displayRandom = (players, teams, playersPerTeam) => {
    const newArr = [];
    console.log(players);
    for (let i = 1; i < teams + 1; i++) {
        newArr.push(`Team ${i}`);
        for (let x = 0; x < playersPerTeam; x++) {
            if (x === playersPerTeam - 1) {
                newArr.push(players[x]);
                players.splice(0, playersPerTeam);
                break;
            } else {
                newArr.push(players[x]);
            }
        }
    }

    return newArr;
}

const RandomScreen = ({ route: { params: { players, teams, playersPerTeam}}}) => {
    const randomPlayers = displayRandom(players, teams, playersPerTeam);

    console.log(randomPlayers);
    return (
        <ScrollView contentContainerStyle={styles.container}>

            {
                randomPlayers.map(el => {
                    if (el.includes('Team')) {
                        return <Text key={el} style={styles.teams}>{el}</Text>
                    } else {
                        return <Text key={el} style={styles.players}>{el}</Text>
                    }
                })
            }
            
            {/* <FlatList
                style={styles.list}
                keyExtractor={item => item}
                data={randomPlayers}
                renderItem={({item}) => {
                    if (item.includes('Team')) {
                        return <Text style={styles.teams}>{item}</Text>
                    } else {
                        return <Text style={styles.players}>{item}</Text>
                    }
                }}
            /> */}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue'
    },
    list: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'red'
    },
    teams: {
        fontSize: 33,
        textDecorationLine: 'underline'
    },
    players: {
        fontSize: 23,
        textAlign: 'center'
    }
})

export default RandomScreen;