import {
  Configuration,
  Container,
  Content,
  Hr,
  Link,
  Navigation,
} from "./styles";

import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

import { useMenu } from "./hooks";

export function Menu() {
  const { getActiveLink, Logo } = useMenu();

  return (
    <Container>
      <Content>
        <Navigation>
          <Logo />
          <Hr />
          <Link
            href="/dashboard"
            className={getActiveLink("/dashboard") ? "active" : ""}
          >
            <HomeIcon />
            <span>DASHBOARD</span>
          </Link>
          <Link href="/box" className={getActiveLink("/box") ? "active" : ""}>
            <PointOfSaleIcon />
            <span>CAIXA</span>
          </Link>
          <Link
            href="/sales"
            className={getActiveLink("/sales") ? "active" : ""}
          >
            <MonetizationOnIcon />
            <span>VENDAS</span>
          </Link>
          <Link
            href="/products"
            className={getActiveLink("/products") ? "active" : ""}
          >
            <ShoppingCartIcon />
            <span>PRODUTOS</span>
          </Link>
          <Link
            href="/stock"
            className={getActiveLink("/stock") ? "active" : ""}
          >
            <InventoryIcon />
            <span>REPOSIÇÃO</span>
          </Link>

          <Link
            href="/"
            className={getActiveLink("/employees") ? "active" : ""}
          >
            <SupervisorAccountIcon />
            <span>FUNCIONÁRIOS</span>
          </Link>
        </Navigation>
        <Configuration>
          <Link
            href="/settings"
            className={getActiveLink("/settings") ? "active" : ""}
          >
            <SettingsIcon />
            <span>CONFIGURAÇÃO</span>
          </Link>
          <Link
            href="/account"
            className={getActiveLink("/account") ? "active" : ""}
          >
            <PersonIcon />
            <span>CONTA</span>
          </Link>
        </Configuration>
      </Content>
    </Container>
  );
}
