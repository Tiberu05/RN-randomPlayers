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