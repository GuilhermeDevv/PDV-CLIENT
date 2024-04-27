import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ICard } from "@/types";
export function useDashboard() {
  const data: ICard[] = [
    {
      Icon: <MonetizationOnIcon />,
      text: "VENDAS",
      quantity: "7808",
    },
    {
      Icon: <GroupIcon />,
      text: "FUNCIONÁRIOS",
      quantity: 322,
    },
    {
      Icon: <ShoppingCartIcon />,
      text: "PRODUTOS",
      quantity: 3322,
    },
    {
      Icon: <GroupIcon />,
      text: "CLIENTES",
      quantity: 10,
    },
  ];
  return { data };
}
