"use client";

import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";

import { ICard } from "@/types";
import { Container, Content, Middle, Top } from "./styles";

const iconMap: { [key: string]: React.ElementType } = {
  MonetizationOnIcon: MonetizationOnIcon,
  GroupIcon: GroupIcon,
  ShoppingCartIcon: ShoppingCartIcon,
  InventoryIcon: InventoryIcon,
};

export function Card({ text, icon, quantity }: ICard) {
  const IconComponent = iconMap[icon];

  return (
    <Container
      href={text === "PRODUTOS PARA REPOSIÇÃO" ? "/stock" : "/dashboard"}
    >
      <Content>
        <Top>
          <span>{text.toLowerCase()}</span>
          {IconComponent && <IconComponent />}
        </Top>
        <Middle>{quantity}</Middle>
      </Content>
    </Container>
  );
}
