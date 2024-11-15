import { IHttpClient } from '@/types/httpClient';

type Auth = {
  client: IHttpClient;
};
// autenticar usuário
export async function authenticateUser({ client }: Auth) {
  const token = window.localStorage.getItem('token');
  if (!token) return false;
  try {
    const response = await client.request({
      url: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.statusCode === 200;
  } catch (error) {
    return false;
  }
}

// obter dados do usuário
export async function getUser({ client }: Auth) {
  const token = window.localStorage.getItem('token');
  if (!token) return false;
  try {
    const { data } = await client.request({
      url: `${process.env.NEXT_PUBLIC_API_URL}/user`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return false;
  }
}

// obter informações pessoais do usuário
export const getInfoUser = async ({ client }: Auth) => {
  const token = window.localStorage.getItem('token');
  if (!token) return false;
  try {
    const { data } = await client.request({
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/info`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return false;
  }
};
