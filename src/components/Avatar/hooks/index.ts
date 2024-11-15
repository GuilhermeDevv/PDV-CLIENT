import { useStoreUser } from '@/lib/store';
import { IHttpClient } from '@/types/httpClient';
import { useQueryClient } from '@tanstack/react-query';

type AvatarProps = {
  //   client: IHttpClient;
};

export function useAvatar() {
  const { setUser, user } = useStoreUser(state => state);

  const queryClient = useQueryClient();
  const handleResetCache = () => {
    setUser({
      id_funcionario: '',
      nome: '',
      cargo: '',
      imagem: '',
    });
    queryClient.resetQueries();
  };

  return {
    user,
    handleResetCache,
  };
}
