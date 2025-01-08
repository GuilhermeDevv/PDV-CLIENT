'use client';

import { httpClientFactory } from '@/adapters';
import { CloseBoxService, ListBoxService } from '@/services/box-service';
import { useBoxModel } from './box-model';

export function Box() {
  const services = {
    listBoxService: new ListBoxService(httpClientFactory()),
    closeBoxService: new CloseBoxService(httpClientFactory()),
  };

  const props = useBoxModel(services);

  return <></>;
}
