const isDev = process.env.NODE_ENV === 'development';
const apiUrl = isDev
  ? 'http://localhost:3000/api/games'
  : 'game-center-store-c9e37hssb-mikolajgraczyk.vercel.app/api/games';

export default apiUrl;
