'use client';
import { ICard } from '@/types';
import { IHttpClient } from '@/types/httpClient';
import { useEffect, useState } from 'react';
import { IData } from '@/types/IDashboard';
import { useStoreIsAuthenticated, useStoreToken } from '@/lib/store';
import { useQueryClient, useQuery } from '@tanstack/react-query';
export interface IuseDashboardProps {
  client: IHttpClient;
}

export function useDashboard({ client }: IuseDashboardProps) {
  const { token } = useStoreToken(state => state);

  const { setIsAuthenticated } = useStoreIsAuthenticated(state => state);

  async function fetchData() {
    try {
      const response = await client.request({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsAuthenticated(true);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  const { data } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchData,
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // 5 minutos
    gcTime: 1000 * 60 * 10, // 10 minutos
  });

  return { data };
}
