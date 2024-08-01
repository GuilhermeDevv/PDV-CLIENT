"use client";
import { Container, Content, Popup } from "./styles";

import { useTableComponent } from "./hooks/useTableComponent";
import { ITableComponentProps } from "./types";
import { Modal } from "@mui/material";

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
            getRowId={(row) => row.id}
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
          </Popup>
        </Modal>
      </Content>
    </Container>
  );
}
