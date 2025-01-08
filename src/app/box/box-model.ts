import { useStoreToken } from '@/lib/store';
import {
  CloseBoxServiceContract,
  ListBoxServiceContract,
} from '@/services/box-service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type BoxServiceRegistry = {
  listBoxService: ListBoxServiceContract;
  closeBoxService: CloseBoxServiceContract;
};

export function useBoxModel(props: BoxServiceRegistry) {
  const { listBoxService, closeBoxService } = props;

  const { token } = useStoreToken(state => state);

  const queryClient = useQueryClient();

  const { data: box } = useQuery({
    queryKey: ['box'],
    queryFn: () => listBoxService.exec(token!),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  const closeBoxFn = useMutation({
    mutationKey: ['close-box'],
    mutationFn: () => closeBoxService.exec(token!),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['box'],
      });
    },
  });

  return { box, closeBoxFn };
}
