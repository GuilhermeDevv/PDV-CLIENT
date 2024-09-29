import dynamic from 'next/dynamic';

const Products = dynamic(() => import('@/components/_Products'), {
  ssr: false,
});

export default Products;
