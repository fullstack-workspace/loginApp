import { IRegisterUser, IRegisterUserResponse } from '@/types';

let headers = {
    'Content-Type': 'application/json',
};
const register = async (payload: IRegisterUser): Promise<IRegisterUserResponse> => {
    const response = await fetch('http://localhost:3051/api/register', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;
}