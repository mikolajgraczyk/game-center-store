import nextAuth from 'next-auth/next';
import { authOptions } from '@/scripts/authOptions';

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
