const Reducer = (state, action) => {
    switch(action.type) {
        case "ADD_PLAYER":
            return { ...state, players: [...state.players, action.payload] };
        case "SET_TEAMS":
            return { ...state, teams: action.payload }
        case "SET_PLAYERS":
            return { ...state, playersPerTeam: action.payload }
        case "SET_ERROR":
            return { ...state, error: action.payload }
        case "CLEAR_ERROR":
            return { ...state, error: ''}
        default:
            return state;
    }
};

export default Reducer;