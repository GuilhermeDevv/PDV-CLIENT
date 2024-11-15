import { useLogin } from '@/utils/hooks/useLogin';
import {
  Container,
  Content,
  Title,
  ContainerInput,
  Actions,
  ForgotPassword,
  Left,
  Right,
  ContainerTitle,
} from './styles';
import { TailSpin } from 'react-loading-icons';
import { httpClientFactory } from '@/adapters';
import { Checkbox } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useStore } from '@/lib/store';
import Image from 'next/image';

export function Login() {
  const isLoading = useStore(state => state.isLoading);
  const {
    errors,
    handleSubmit,
    register,
    handleLogin,
    remember,
    setRemember,
    label,
  } = useLogin({
    client: httpClientFactory(),
  });

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleLogin as any)}>
        <Left>
          <ContainerTitle>
            <Title>Acesse a plataforma</Title>
            <p>Acesse com seu login e senha para começar a usar a plataforma</p>
          </ContainerTitle>
          <ContainerInput>
            <label>E-mail </label>
            <input type="text" placeholder="Login" {...register('login')} />
          </ContainerInput>

          <ContainerInput>
            <label>Senha</label>
            <input
              autoComplete="off"
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
          </ContainerInput>
          <Actions>
            {/* <label htmlFor="remember">
              <Checkbox
                {...label}
                id="remember"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                icon={<PanoramaFishEyeIcon fontSize="large" />}
                checkedIcon={<CheckCircleOutlineIcon fontSize="large" />}
                name="remember"
              />
              Lembrar-me
            </label> */}

            <ForgotPassword href={'/forgot-password'}>
              Esqueceu a senha?
            </ForgotPassword>
          </Actions>
          <button type="submit" disabled={isLoading}>
            {isLoading ? <TailSpin height={30} /> : 'Entrar'}
          </button>
        </Left>
        <Right>
          <Image
            quality={100}
            src={'/img.svg'}
            alt="Login"
            width={500}
            height={500}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Right>
      </Content>
    </Container>
  );
}
