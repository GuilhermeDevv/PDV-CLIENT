import { user } from '@/types';
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
      url: `/auth`,
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
export async function getUser({ client }: Auth): Promise<user | false> {
  const token = window.localStorage.getItem('token');
  if (!token) return false;
  try {
    const { data } = await client.request({
      url: `/user`,
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
      url: `/user/info`,
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
