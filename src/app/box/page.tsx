import dynamic from 'next/dynamic';

const Box = dynamic(() => import('@/components/_Box'), { ssr: false });

export default Box;
