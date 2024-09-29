'use client';
import { ICard } from '@/types';
import { IHttpClient } from '@/types/httpClient';
import { useEffect, useState } from 'react';
import { IData } from '@/types/IDashboard';
import { useStoreIsAuthenticated } from '@/lib/store';
export interface IuseDashboardProps {
  client: IHttpClient;
}

export function useDashboard({ client }: IuseDashboardProps) {
  const [data, setData] = useState<IData | null>(null);
  const timeAnimation = 7500;
  const [isAnimation, setTimeAnimation] = useState(true);
  const token = window.localStorage.getItem('token');
  const { setIsAuthenticated } = useStoreIsAuthenticated(state => state);

  setTimeout(() => {
    setTimeAnimation(false);
  }, timeAnimation);

  async function fetchData() {
    try {
      const response = await client.request({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { data, isAnimation };
}
