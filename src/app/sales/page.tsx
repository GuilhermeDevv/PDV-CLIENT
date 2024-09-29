import dynamic from 'next/dynamic';

const Sales = dynamic(() => import('@/components/_Sales'), {
  ssr: false,
});

export default Sales;
