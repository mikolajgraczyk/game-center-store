import apiUrl from '@/constants/apiUrl';
import { IRegisterUserData } from '@/types/user';

const registerUser = async (data: IRegisterUserData) => {
  const res = await fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const errorData = await res.json();

  if (!res.ok) {
    throw new Error(errorData.message);
  }

  return res.json();
};

export default registerUser;
