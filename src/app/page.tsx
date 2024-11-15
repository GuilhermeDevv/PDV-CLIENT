'use client';

import { Login } from '@/components/Login';
import { Main } from './styles';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Main>
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </Main>
  );
}
