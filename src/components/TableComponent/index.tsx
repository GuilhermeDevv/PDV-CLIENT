'use client';
import { Container, Content } from './styles';

import { useTableComponent } from './hooks/useTableComponent';
import { ITableComponentProps } from './types';
import { ModalComponent } from './components/modal-component';

export function TableComponent({
  table,
  isEditable,
  isOnline,
  setProductEdit,
  handleChangeStatus,
}: ITableComponentProps) {
  const {
    rows,
    columns,
    StyledDataGrid,
    localeText,
    open,
    selectedRow,
    handleClose,
    handlePrint,
  } = useTableComponent({
    table,
    isEditable,
    isOnline,
    setProductEdit,
    handleChangeStatus,
  });

  return (
    <Container>
      <Content>
        {table && table.length > 0 && (
          <StyledDataGrid
            columns={columns}
            rows={rows ? rows : []}
            className="DataGrid"
            pagination
            localeText={
              localeText.components.MuiDataGrid.defaultProps.localeText
            }
            getRowId={row => row.id}
            disableRowSelectionOnClick={true}
          />
        )}

        <ModalComponent
          handleClose={handleClose}
          handlePrint={handlePrint}
          open={open}
          selectedRow={selectedRow}
        />
      </Content>
    </Container>
  );
}
