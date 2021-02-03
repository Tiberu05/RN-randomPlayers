export const addPlayer = (players, player, dispatch, textInput) => {
    const newArr = players.map(el => el.toLowerCase());
    const index = newArr.findIndex(el => el === player.toLowerCase());

    if (player.length < 1) {
        dispatch({ type: 'SET_ERROR', payload: 'Input field is empty'});
    } else if (player.length > 0 && index !== -1) {
        dispatch({ type: 'SET_ERROR', payload: 'Name already added'});
    } else if (player.length > 0 && index === -1) {
        dispatch({ type: 'ADD_PLAYER', payload: player })             
        textInput.current.clear();
        dispatch({ type: 'CLEAR_ERROR' }); 
    }
};

export const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

export const displayRandom = (players, teams, playersPerTeam) => {
    const shuffledArray = players.map(el => el);
    shuffle(shuffledArray);
    const newArr = [];
    for (let i = 1; i < teams + 1; i++) {
        //newArr.push(`Team ${i}`);
        const team = {};
        team.teamNr = i;
        team.players = [];
        for (let x = 0; x < playersPerTeam; x++) {
            if (x === playersPerTeam - 1) {
                team.players.push(shuffledArray[x])
                //newArr.push(shuffledArray[x]);
                newArr.push(team);
                shuffledArray.splice(0, playersPerTeam);
                break;
            } else {
                //newArr.push(shuffledArray[x]);
                team.players.push(shuffledArray[x])
            }
        }
    }

    return newArr;
}