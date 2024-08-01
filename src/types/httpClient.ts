type Data = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  headers?: any;
  body?: any;
};

export interface IHttpClient {
  request: (data: Data) => Promise<{
    data: any;
    statusCode: number;
  }>;
}
