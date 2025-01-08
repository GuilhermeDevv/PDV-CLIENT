'use client';

// Hooks
import { useDashboardModel } from './use-dashboard-model';

// Services
import { ListDashboardService } from '@/services/dashboard-service';

// Adapters
import { httpClientFactory } from '@/adapters';

// Components
import { DashboardView } from './dashboard-view';

export default function Dashboard() {
  const services = {
    listCardService: new ListDashboardService(httpClientFactory()),
  };

  const props = useDashboardModel(services);

  return <DashboardView {...props} />;
}
