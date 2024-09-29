import { IHttpClient } from '@/types/httpClient';

type Auth = {
  client: IHttpClient;
};

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
