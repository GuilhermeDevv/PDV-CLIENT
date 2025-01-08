// Styles
import { Container, Main } from '@/app/styles';

// Components
import { TitleComponent } from '@/components/Title';
import { BoxButton } from '@/components/BoxButton';
import { TableComponent } from '@/components/TableComponent';
import { NotFound } from '@/components/NotFound';

// Dynamic imports
import dynamic from 'next/dynamic';


export function BoxView(props: ReturnType<typeof >) {

    const {} = props;
  return (
    <Main>
      <Container>
        <TitleComponent text="CAIXA" />
        <BoxButton
          handleChangeVisibilityPopup={() => handleChangeVisibilityPopup()}
          boxOpen={hasBoxOpen}
          fetchCloseBoxFn={fetchCloseBox}
          idCaixa={table?.length === 0 || !table ? 0 : +table[0].id!}
        />
        {table && <TableComponent table={table} key="table" />}
        {table && table.length === 0 && (
          <NotFound text="Nenhum caixa encontrado !" />
        )}
        <PopupComponent
          isLoading={loading}
          setIsOpen={setOpen}
          open={open}
          handleChangeVisibilityPopup={() => handleChangeVisibilityPopup()}
          fetchOpenBoxFn={fetchOpenBox}
        />
      </Container>
    </Main>
  );
}
