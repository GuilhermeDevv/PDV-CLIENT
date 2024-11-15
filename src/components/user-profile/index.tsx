import {
  useStoreInfoUser,
  useStoreIsAuthenticated,
  useStoreUser,
} from '@/lib/store';
import {
  Bottom,
  BottomBox,
  Box,
  Container,
  InfoUser,
  Middle,
  Point,
  Top,
} from './styles';
import { TitleComponent } from '@/components/Title';
import { AvatarComponent } from '@/components/Avatar';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useTheme } from 'styled-components';
import { memo } from 'react';

type UserProfileProps = {
  isOpen: boolean;
};

const UserProfileComponent = ({ isOpen }: UserProfileProps) => {
  const { user } = useStoreUser(state => state);
  const { infoUser } = useStoreInfoUser(state => state);
  const { isAuthenticated } = useStoreIsAuthenticated(state => state);
  const theme = useTheme();

  return (
    <Container $isOpen={isOpen}>
      <Top>
        <TitleComponent
          text="Meu Perfil"
          style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'inherit',
            margin: 0,
            alignSelf: 'flex-start',
          }}
        />
        <p>Aqui você pode ver suas informações pessoais</p>
      </Top>
      <Middle>
        <AvatarComponent width={70} height={70} />
        <InfoUser>
          <Point $online={isAuthenticated}>
            {isAuthenticated && (
              <>
                <span />
                <span>ONLINE</span>
              </>
            )}

            {!isAuthenticated && (
              <>
                <span />
                <span>OFFLINE</span>
              </>
            )}
          </Point>
          <strong>{user.nome}</strong>
          <span>{user.cargo}</span>
        </InfoUser>
      </Middle>
      <Bottom>
        <Box>
          <TitleComponent
            style={{
              fontSize: '1.2rem',
              fontWeight: 'normal',
              margin: 0,
              marginBottom: 0,
              alignSelf: 'flex-start',
              color: theme.icon,
            }}
            text="Vendas realizadas"
          />
          <BottomBox $color={theme.primaryBackground}>
            <MonetizationOnIcon />
            <strong>{infoUser.total_vendas}</strong>
          </BottomBox>
        </Box>
      </Bottom>
    </Container>
  );
};

export const UserProfile = memo(UserProfileComponent);
