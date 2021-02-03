import { removePlayer } from './utility';

const Reducer = (state, action) => {
    switch(action.type) {
        case "ADD_PLAYER":
            return { ...state, players: [...state.players, action.payload] };
        case "CLEAR_PLAYERS":
            return { ...state, players: []};
        case "REMOVE_PLAYER":
            return { ...state, players: removePlayer(state.players, action.payload)}
        case "SET_TEAMS":
            return { ...state, teams: action.payload }
        case "SET_PLAYERS":
            return { ...state, playersPerTeam: action.payload }
        case "SET_ERROR":
            return { ...state, error: action.payload }
        case "CLEAR_ERROR":
            return { ...state, error: ''}
        case "DISPLAY_TEAMS_PICKER":
            return { ...state, picker: { display: true, numberTeams: true, numberPlayers: false }}
        case "DISPLAY_PLAYERS_PICKER":
            return { ...state, picker: { display: true, numberTeams: false, numberPlayers: true }}
        case "HIDE_PICKER":
            return { ...state, picker: { display: false, numberTeams: false, numberPlayers: false }}
        default:
            return state;
    }
};

export default Reducer;