import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@models/user';
import bcrypt from 'bcrypt';
import connect from '@/libs/db';

// eslint-disable-next-line import/prefer-default-export
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connect();
        const user = await User.findOne({ email: credentials?.email });

        if (user && (await bcrypt.compare(credentials?.password || '', user.password))) {
          return {
            id: user._id,
            email: user.email,
            name: `${user.name} ${user.surname}`,
          };
        }
        throw new Error('INVALID_EMAIL_OR_PASSWORD');
      },
    }),
  ],
};
