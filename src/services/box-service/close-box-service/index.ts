import { IHttpClient } from '@/types';

export type CloseBoxServiceContract = {
  exec: (token: string) => Promise<boolean>;
};

export class CloseBoxService implements CloseBoxServiceContract {
  constructor(private client: IHttpClient) {}

  async exec(token: string): Promise<boolean> {
    const response = await this.client.request({
      url: `${process.env.NEXT_PUBLIC_API_URL}/caixa`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.error;
  }
}
