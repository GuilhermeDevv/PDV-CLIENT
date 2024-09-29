'use client';

import { TitleComponent } from '@/components/Title';
import { Container, Main } from '@/app/styles';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { TableComponent } from '@/components/TableComponent';
import { PopupSales } from '@/components/PopupSales';
import { ContainerActions } from './styles';
import { useSales } from '@/utils/hooks/useSales';

import { httpClientFactory, formatDateFactory } from '@/adapters';
import { NotFound } from '@/components/NotFound';

export default function Sales() {
  const {
    isOpen,
    setIsOpen,
    sales,
    handleSales,
    productReactSelect,
    isLoading,
  } = useSales({
    client: httpClientFactory(),
    formatDate: formatDateFactory(),
  });

  return (
    <Main>
      <Container>
        <TitleComponent text="VENDAS" />
        <ContainerActions>
          <AddCircleRoundedIcon onClick={() => setIsOpen(true)} />
        </ContainerActions>
        {sales && sales.length > 0 && <TableComponent table={sales ?? []} />}
        {sales && sales.length === 0 && (
          <NotFound text="Nenhuma venda encontrada no atual caixa !" />
        )}
        {isOpen && (
          <PopupSales
            setIsOpen={v => setIsOpen(v)}
            sales={sales}
            productOptions={productReactSelect ?? []}
            handleSales={sale => handleSales(sale)}
            isLoading={isLoading}
          />
        )}
      </Container>
    </Main>
  );
}
