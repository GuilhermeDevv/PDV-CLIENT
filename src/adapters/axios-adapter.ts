import { IHttpClient } from "@/types/httpClient";
import axios, { AxiosError, AxiosResponse } from "axios";

export class AxiosAdapter implements IHttpClient {
  async request(data: any) {
    let response: AxiosResponse;
    try {
      response = await axios.request({
        url: data.url,
        method: data.method,
        headers: data.headers,
        data: data.body,
      });
    } catch (error) {
      const _error = error as AxiosError<{
        message: string;
      }>;
      throw new Error(_error.response?.data.message);
    }

    return {
      data: response.data,
      statusCode: response.status,
    };
  }
}
