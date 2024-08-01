import { ICard } from "@/types";
import { IHttpClient } from "@/types/httpClient";
import { useEffect, useState } from "react";
import { IData } from "@/types/IDashboard";
export interface IuseDashboardProps {
  client: IHttpClient;
}

export function useDashboard({ client }: IuseDashboardProps) {
  const [data, setData] = useState<IData | null>(null);

  async function fetchData() {
    try {
      const response = await client.request({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard`,
      });

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { data };
}
