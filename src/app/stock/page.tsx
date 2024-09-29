import dynamic from 'next/dynamic';

const Stock = dynamic(() => import('@/components/_Stock'), {
  ssr: false,
});

export default Stock;
