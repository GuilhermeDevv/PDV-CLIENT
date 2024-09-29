import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/components/_Dashboard'), {
  ssr: false,
});

export default Dashboard;
