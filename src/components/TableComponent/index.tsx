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
    <html>
      <head>
        <title>Imprimir</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
          h3, h4, h6 { margin: 0; padding: 0; }
          h4 { margin-bottom: 10px; font-size: 14px; }
          h6 { margin-bottom: 5px; }
          hr { margin: 10px 0; }
          ul { list-style-type: none; padding: 0; }
          li { margin: 5px 0; font-size: 12px; }
        </style>
      </head>
      <body>
        <h4>Ferreira's Construção</h4>
        <h6>Cliente: ${(selectedRow as any)?.cliente}</h6>
        <h6>Vendedor: ${(selectedRow as any)?.funcionario}</h6>
        <hr/>
        <hr/>
        <h6>Qtd x Unit / Descrição - Total</h6>
        <hr/>
        <hr/>
        <ul>
          ${(selectedRow as any)?.produtos
            ?.map((produto: any) => {
              const [descricao, resto] = produto.split('(');
              return `<li>${descricao.trim()}<br/>(${resto}`;
            })
            .join('')}
        </ul>
        <hr/>
        <hr/>
        <h4>Total a Pagar: ${(selectedRow as any)?.total}</h4>
      </body>
    </html>
  `;
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow?.document.write(`
          ${printContent}
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
