'use client';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useStoreIsAuthenticated, useStoreToken } from '@/lib/store';

import { ListDashboardServiceContract } from '@/services/dashboard-service';

export type DashboardServiceRegistry = {
  listCardService: ListDashboardServiceContract;
};

export function useDashboardModel(props: DashboardServiceRegistry) {
  const { setIsAuthenticated } = useStoreIsAuthenticated(state => state);
  const { listCardService } = props;

  const { token } = useStoreToken(state => state);

  const { data } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => listCardService.exec(token!),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    if (data) setIsAuthenticated(true);
  }, [data, setIsAuthenticated]);

  return { data };
}
