import {
  Configuration,
  Container,
  Hr,
  InfoUser,
  Left,
  Link,
  Logout,
  Navigation,
  NotificationContainer,
  RightTop,
  Separator,
  TitleComponent,
  Top,
  User,
} from './styles';

import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useMenu } from './hooks';
import { useTheme } from 'styled-components';
import { useStoreNotification, useStoreUser } from '@/lib/store';
import { AvatarComponent } from '../Avatar';
import { IconCaretDown } from '@/assets/icons';
import { UserProfile } from '../user-profile';
import { IHttpClient } from '@/types/httpClient';

export type MenuProps = {
  client: IHttpClient;
};

export function Menu({ client }: MenuProps) {
  const {
    getActiveLink,
    Logo,
    logout,
    IconSpeedometer,
    toogleMenuUser,
    isOpen,
  } = useMenu(client);
  const { user } = useStoreUser(state => state);
  const { notification } = useStoreNotification(state => state);

  return (
    <Container>
      <Top>
        <div />
        <RightTop>
          <NotificationContainer $qtdNotification={notification.length}>
            <NotificationsIcon />
          </NotificationContainer>

          <Separator />
          <User $isOpen={isOpen}>
            <AvatarComponent />
            <InfoUser>
              <span>{user?.nome}</span>
              <span>{user?.cargo}</span>
            </InfoUser>
            <div className="IconArrowUser" onClick={toogleMenuUser}>
              <IconCaretDown />
            </div>
            <UserProfile isOpen={isOpen} />
          </User>
        </RightTop>
      </Top>
      <Left>
        <Navigation>
          <Link href="/dashboard" className={'Ku'}>
            <Logo />
            <span>Ku</span>
          </Link>

          <TitleComponent>Menu</TitleComponent>

          <Link
            href="/dashboard"
            className={getActiveLink('/dashboard') ? 'active' : ''}
          >
            <IconSpeedometer />
            <span>Dashboard</span>
          </Link>
          <Link href="/box" className={getActiveLink('/box') ? 'active' : ''}>
            <PointOfSaleIcon />
            <span>CAIXA</span>
          </Link>
          <Link
            href="/sales"
            className={getActiveLink('/sales') ? 'active' : ''}
          >
            <MonetizationOnIcon />
            <span>VENDAS</span>
          </Link>
          <Link
            href="/products"
            className={getActiveLink('/products') ? 'active' : ''}
          >
            <ShoppingCartIcon />
            <span>PRODUTOS</span>
          </Link>
          <Link
            href="/stock"
            className={getActiveLink('/stock') ? 'active' : ''}
          >
            <InventoryIcon />
            <span>REPOSIÇÃO</span>
          </Link>

          <Link
            href="/"
            className={getActiveLink('/employees') ? 'active' : ''}
          >
            <SupervisorAccountIcon />
            <span>FUNCIONÁRIOS</span>
          </Link>
        </Navigation>
        <Configuration>
          <Link
            href="/settings"
            className={getActiveLink('/settings') ? 'active' : ''}
          >
            <SettingsIcon />
            <span>CONFIGURAÇÃO</span>
          </Link>

          <Logout onClick={logout}>
            <LogoutIcon />
            <span>SAIR</span>
          </Logout>
          {/* <Link
            href="/account"
            className={getActiveLink("/account") ? "active" : ""}
          >
            <PersonIcon />
            <span>CONTA</span>
          </Link> */}
        </Configuration>
      </Left>
    </Container>
  );
}
