'use client';
import { ContainerActions } from './styles';

import { useProducts } from '@/utils/hooks/useProducts';
import { SearchComponent } from '@/components/Search';
import { Container, Main } from '@/app/styles';
import { TitleComponent } from '@/components/Title';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { PopupProductsComponent } from '@/components/PopupProducts';

import { httpClientFactory } from '@/adapters';
import { NotFound } from '@/components/NotFound';
import { ProductsContainer } from '@/components/products-container';
import { OrderByComponent } from '@/components/OrderByComponent';

export default function Products() {
  const {
    table,
    tableFiltered,
    handleOrderBy,
    handleFilterTable,
    setIsOpen,
    isOpen,
    isLoading,
    handleCreateProduct,
    productEdit,
    setProductEdit,
    handleOpenPopup,
    fetchChangeStatus,
    fetchUpdateProduct,
  } = useProducts({
    client: httpClientFactory(),
  });

  return (
    <Main>
      <Container>
        <TitleComponent
          text="Produtos"
          style={{
            fontWeight: 'normal',
          }}
        />
        <ContainerActions>
          <AddCircleRoundedIcon onClick={handleOpenPopup} />
          <SearchComponent
            placeholder="Pesquisar produtos..."
            onChange={e => handleFilterTable(e.target.value)}
          />
          <OrderByComponent handleOrderBy={handleOrderBy} />
        </ContainerActions>
        {/* {table && table.length === 0 && (
          <NotFound text="Nenhum produto encontrado !" />
        )} */}
        {table.length > 0 && (
          <ProductsContainer
            products={tableFiltered.length > 0 ? tableFiltered : table}
          />
        )}

        <PopupProductsComponent
          isOpen={isOpen}
          isLoading={isLoading}
          setIsOpen={setIsOpen}
          handleCreateProduct={handleCreateProduct}
          product={productEdit}
          fetchUpdateProduct={fetchUpdateProduct}
        />
      </Container>
    </Main>
  );
}
