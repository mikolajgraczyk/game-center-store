const queryKeys = {
  fetchGames: ['fetch', 'games'],
  fetchGame: (id: string | number) => ['fetch', 'game', id],
};

export default queryKeys;
