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
import { Skeleton } from '@mui/material';

export function MenuLoading() {
  const { getActiveLink, Logo, logout, IconSpeedometer } = useMenu();
  const { user } = useStoreUser(state => state);
  const { notification } = useStoreNotification(state => state);

  return (
    <Container>
      <Top>
        <div />
        <RightTop>
          <NotificationContainer qtdNotification={notification.length}>
            <Skeleton variant="circular" width={24} height={24}>
              <NotificationsIcon />
            </Skeleton>
          </NotificationContainer>
          <Separator />
          <User>
            <Skeleton variant="circular" width={40} height={40}>
              <AvatarComponent />
            </Skeleton>
            <InfoUser>
              <Skeleton width={100} height={20} />
              <Skeleton width={100} height={20} />
            </InfoUser>
            <Skeleton variant="rectangular" width={24} height={24}>
              <IconCaretDown />
            </Skeleton>
          </User>
        </RightTop>
      </Top>
      <Left>
        <Navigation>
          <Link href="/dashboard" className={'Ku'}>
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <Logo />
            </Skeleton>
            <Skeleton width={50} height={20} />
          </Link>

          <TitleComponent>
            <Skeleton width={100} height={20} />
          </TitleComponent>

          <Link
            href="/dashboard"
            className={getActiveLink('/dashboard') ? '' : ''}
          >
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <IconSpeedometer />
            </Skeleton>
            <Skeleton height={20} />
          </Link>
          <Link href="/box" className={getActiveLink('/box') ? 'active' : ''}>
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <PointOfSaleIcon />
            </Skeleton>
            <Skeleton height={20} />
          </Link>
          <Link
            href="/sales"
            className={getActiveLink('/sales') ? 'active' : ''}
          >
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <MonetizationOnIcon />
            </Skeleton>
            <Skeleton height={20} />
          </Link>
          <Link
            href="/products"
            className={getActiveLink('/products') ? 'active' : ''}
          >
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <ShoppingCartIcon />
            </Skeleton>
            <Skeleton height={20} />
          </Link>
          <Link
            href="/stock"
            className={getActiveLink('/stock') ? 'active' : ''}
          >
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <InventoryIcon />
            </Skeleton>
            <Skeleton height={20} />
          </Link>
          <Link
            href="/"
            className={getActiveLink('/employees') ? 'active' : ''}
          >
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <SupervisorAccountIcon />
            </Skeleton>
            <Skeleton height={20} />
          </Link>
        </Navigation>
        <Configuration>
          <Link
            href="/settings"
            className={getActiveLink('/settings') ? 'active' : ''}
          >
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <SettingsIcon />
            </Skeleton>
            <Skeleton height={20} />
          </Link>

          <Logout onClick={logout}>
            <Skeleton
              className="skeleton"
              variant="rectangular"
              width={24}
              height={24}
            >
              <LogoutIcon />
            </Skeleton>
            <Skeleton height={20} />
          </Logout>
        </Configuration>
      </Left>
    </Container>
  );
}
