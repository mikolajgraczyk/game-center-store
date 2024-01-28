import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import registerUser from '@/apiUrls/registerUser';
import { IUser } from '@/types/user';

// eslint-disable-next-line import/prefer-default-export
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: 'Name', type: 'text' },
        surname: { label: 'Surname', type: 'text' },
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        age: { label: 'Age', type: 'number' },
      },
      authorize: async (credentials) => {
        const res = await registerUser(credentials as IUser);

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
};
