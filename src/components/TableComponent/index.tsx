'use client';
import { Container, Content, Popup } from './styles';

import { useTableComponent } from './hooks/useTableComponent';
import { ITableComponentProps } from './types';
import { Modal } from '@mui/material';

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
    handleClose,
    open,
    selectedRow,
  } = useTableComponent({
    table,
    isEditable,
    isOnline,
    setProductEdit,
    handleChangeStatus,
  });
  const handlePrint = () => {
    const printContent = `
      <h3>Ferreira's Construção</h3>
      <h6>Cliente: ${(selectedRow as any)?.cliente}</h6>
      <h6>Vendedor: ${(selectedRow as any)?.funcionario}</h6>
      <hr/>
      <h6>Descrição / QTD</h6>
      <hr/>
      <ul style="list-style-type: none; padding: 0;">
        ${(selectedRow as any)?.produtos
          ?.map((produto: any) => `<li>${produto}</li>`)
          .join('')}
      </ul>
      <hr/>
      <h4>Total: R$ ${(selectedRow as any)?.total}</h4>
    `;
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow?.document.write(`
      <html>
        <head>
          <title>Imprimir</title>
          <style>
            body { font-family: Arial, sans-serif, background-color: red; }
            h2, h4, h6 { margin: 0; padding: 0; }
            div { margin: 10px 0; }
            ul { list-style-type: none; padding: 0; }
            li { margin: 5px 0; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
    printWindow?.close();
  };

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

        <Modal open={open} onClose={handleClose}>
          <Popup>
            <h2>Produtos</h2>
            <ul>
              {selectedRow?.produtos?.map((produto, index) => (
                <li key={index}>{produto}</li>
              ))}
            </ul>
            <button onClick={handlePrint}>Imprimir</button>
          </Popup>
        </Modal>
      </Content>
    </Container>
  );
}
