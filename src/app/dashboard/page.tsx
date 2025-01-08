import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/app/dashboard/dashboard-view-model'), {
  ssr: false,
});

export default Dashboard;
