const apiUrls = {
  development: 'http://localhost:3000/api',
  production: 'http://www.game-center-store-c9e37hssb-mikolajgraczyk.vercel.app/api',
};
const API_URL = apiUrls[process.env.NODE_ENV as 'development' | 'production'];

export default API_URL;
