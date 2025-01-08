import { Dashboard, IHttpClient } from '@/types';

export type ListDashboardServiceContract = {
  exec: (token: string) => Promise<Dashboard>;
};

export class ListDashboardService implements ListDashboardServiceContract {
  constructor(private readonly httpClient: IHttpClient) {}

  static create(httpClient: IHttpClient): ListDashboardService {
    return new ListDashboardService(httpClient);
  }

  async exec(token: string): Promise<Dashboard> {
    const { data } = await this.httpClient.request({
      url: '/dashboard',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
}
