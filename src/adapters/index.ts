import { IHttpClient } from "@/types/httpClient";
import { IFormatDate } from "@/types/formatDate";
import { AxiosAdapter } from "./axios-adapter";
import { DayJsAdapter } from "./dayJs-adapter";


export const httpClientFactory = (): IHttpClient => new AxiosAdapter();
export const formatDateFactory = (): IFormatDate => new DayJsAdapter();




