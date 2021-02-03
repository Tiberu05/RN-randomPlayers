export const removePlayer = (players, player) => {
    const newArr = players.filter(el => el !== player);

    return newArr;
}