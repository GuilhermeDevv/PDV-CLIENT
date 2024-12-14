import { getUser } from '@/lib/auth';
import { IHttpClient, user } from '@/types';

export type ListUserServiceContract = {
  exec: () => Promise<user | false>;
};

export class ListUserService implements ListUserServiceContract {
  constructor(private readonly httpClient: IHttpClient) {}

  static create(httpClient: IHttpClient): ListUserService {
    return new ListUserService(httpClient);
  }

  async exec(): Promise<user | false> {
    const data = await getUser({ client: this.httpClient });
    return data;
  }
}
