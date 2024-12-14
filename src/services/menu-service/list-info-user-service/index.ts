import { getInfoUser } from '@/lib/auth';
import { IHttpClient } from '@/types';
import { SalesData } from '@/types/info-user';

export type ListInfoUserServiceContract = {
  exec: () => Promise<SalesData | false>;
};

export class ListInfoUserService implements ListInfoUserServiceContract {
  constructor(private readonly httpClient: IHttpClient) {}

  static create(httpClient: IHttpClient): ListInfoUserService {
    return new ListInfoUserService(httpClient);
  }

  async exec(): Promise<SalesData | false> {
    const data = await getInfoUser({ client: this.httpClient });
    return data;
  }
}
