import { IHttpClient, Box } from '@/types';

export type ListBoxServiceContract = {
  exec: (token: string) => Promise<Box>;
};

export class ListBoxService implements ListBoxServiceContract {
  constructor(private readonly httpClient: IHttpClient) {}

  static create(httpClient: IHttpClient): ListBoxService {
    return new ListBoxService(httpClient);
  }

  async exec(token: string): Promise<Box> {
    const { data } = await this.httpClient.request({
      url: '/box',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
}
