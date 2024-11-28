'use client';

import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import { Card as ICard } from '@/types';
import {
  Bottom,
  Container,
  ContainerIcon,
  Content,
  Info,
  Middle,
  Top,
} from './styles';
import { LineComponent } from '../Line';
import { memo } from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  MonetizationOnIcon: MonetizationOnIcon,
  GroupIcon: GroupIcon,
  ShoppingCartIcon: ShoppingCartIcon,
  InventoryIcon: InventoryIcon,
  ArrowDown: ArrowCircleDownTwoToneIcon,
  ArrowUp: ArrowCircleUpTwoToneIcon,
  ArrowRight: ArrowCircleRightTwoToneIcon,
};

const CardComponent = ({
  text,
  icon,
  quantity,
  color,
  iconInfo,
  labelInfo,
  valueInfo,
  v1,
  v2,
}: ICard) => {
  const IconComponent = iconMap[icon];
  const IconInfoBottom = iconMap[iconInfo];

  return (
    <Container
      href={text === 'PRODUTOS PARA REPOSIÇÃO' ? '/stock' : '/dashboard'}
    >
      <Content>
        <Top>
          <ContainerIcon color={color}>
            {IconComponent && <IconComponent />}
          </ContainerIcon>
          <span>{text.toLowerCase()}</span>
        </Top>
        <Middle>
          <strong>{quantity}</strong>
          <LineComponent data={{ v1, v2, color }} />
        </Middle>

        <Bottom color={color}>
          {IconInfoBottom && <IconInfoBottom />}
          <Info>
            <span>{valueInfo}</span>
            <span>{labelInfo}</span>
          </Info>
        </Bottom>
      </Content>
    </Container>
  );
};

export const Card = memo(CardComponent);
