import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { ptBR } from "@mui/x-data-grid/locales";
import { IProduct } from "@/types/IProduct";
import { ButtonComponent } from "@/components/Button/Button";

import Switch from "@mui/material/Switch";
import { ITable } from "@/types/ITable";
import { ITableComponentProps } from "../types";
import { useState } from "react";

interface IUseTableComponent {
  table: ITable[];
  isEditable?: boolean;
  isOnline?: boolean;
  setProductEdit?: (product: IProduct) => void;
  handleChangeStatus?: (id: number, status: boolean) => void;
}

export function useTableComponent({
  table,
  isEditable,
  setProductEdit,
  handleChangeStatus,
}: IUseTableComponent) {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{
    produtos: string[];
  } | null>(null);

  const handleClickOpen = (
    row: {
      produtos: string[];
    } | null
  ) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  function changeStatus(id: number, status: boolean) {
    handleChangeStatus!(id, status);
  }

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    "& .MuiDataGrid-columnHeaderTitle": {
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
    },
    "& .MuiDataGrid-cell:focus": {
      outline: "none",
    },
    "& .MuiDataGrid-columnHeadersRow": {
      border: "none",
      fontFamily: "sans-serif",
      color: "red",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
      textAlign: "center",
      background: "transparent",
    },
    "& .MuiDataGrid-columnHeaders": {
      border: "none",
      fontFamily: "sans-serif",
      color: "red",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
      textAlign: "center",
      background: "transparent",
    },
    "& .MuiDataGrid-topContainer ": {
      "&::after": {
        background: "#262626",
      },
    },

    "& .MuiDataGrid-columnHeaders > div": {
      background: "#262626 !important",
      color: "red",
      "&::after": {
        background: "#262626",
      },
    },
    "& .MuiDataGrid-columnHeader:hover": {
      backgroundColor: "inherit",
      transform: "none",
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "inherit",
    },
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
      border: "none",
    },
    "& .MuiDataGrid-sortIcon": {
      color: "#fff",
    },
    "& .MuiDataGrid-cell": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      color: "#000",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      border: "none",
      textAlign: "center",
      "&:hover": {
        backgroundColor: "inherit",
      },
      "&[data-field='cor']": {
       alignItems: "flex-start",
       justifyContent: "flex-start",
       padding: "2px",
      },
    },

    "& .MuiDataGrid-row .MuiDataGrid-cell": {
      background: "#262626",
      color: "#A0A0A0",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "sans-serif",
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: "#262626",
      fontSize: "12px",
      fontWeight: "bold",
      color: "#A0A0A0",
      border: "none",
      "& *": {
        color: "#fff",
        fontWeight: "bold",
      },
    },
    "& .MuiDataGrid-scrollbar--horizontal": {
      background: "#232627",
      "&::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
        background: "#232627",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#f00",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#232627",
      },
    },
    "& .MuiDataGrid-scrollbar--vertical": {
      background: "#232627",
      "&::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
        background: "#232627",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#f00",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#232627",
      },
    },
    "& .MuiTablePagination-root": {
      color: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
    "& .MuiDataGrid-row.Mui-selected": {
      backgroundColor: "transparent",
    },
    "& .MuiDataGrid-selectedRowCount": {
      color: "#fff",
    },
  }));

  const setProductEditFn = (data: any) => {
    const obj = {
      ...data,
      id_produto: data.id,
      preco: data.preco.replace("R$", ""),
      custo: data.custo.replace("R$", ""),
    };

    setProductEdit!(obj);
  };

  const rows = table ?? [];
  const keys = rows && rows.length > 0 && Object.keys(rows[0]);
  const columns: GridColDef[] = keys
    ? keys.map((key) =>
        key === "isOnline"
          ? {
              field: key,
              headerName: "Disponível no catálogo",
              headerAlign: "center",
              align: "center",
              width: 200,
              sortable: false,
              disableColumnMenu: true,
              renderCell: (params: GridCellParams) => (
                <div style={{ height: "50%" }}>
                  <Switch
                    color="primary"
                    size="small"
                    checked={params.row.isOnline}
                    onChange={() => {
                      changeStatus(params.row.id, !params.row.isOnline);
                    }}
                  />
                </div>
              ),
            }
          : key === "produtos"
          ? {
              type: "string",
              field: key,
              headerName: key,
              width: 200,
              sortable: false,
              headerAlign: "center",
              align: "center",
              disableColumnMenu: true,
              renderCell: (params: GridCellParams) => (
                <ButtonComponent
                  onClick={() => handleClickOpen(params.row)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#007bff",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {params?.value as string}
                </ButtonComponent>
              ),
            }
          : key === "cor"
          ? {
              type: "string",
              field: key,
              headerName: "",
              width: 0,
              sortable: false,
              headerAlign: "left",
              align: "left",
              disableColumnMenu: true,
              renderCell: (params: GridCellParams) => (
                <div
                  style={{
                    width: "6px",
                    height: "90%",
                    padding: "0",
                    backgroundColor: params.value as string,
                  }}
                />
              ),
            }
          : {
              type: "string",
              field: key,
              headerName: key,
              width: 200,
              sortable: false,
              sortComparator: (v1: any, v2: any) => {
                if (
                  typeof v1 === "string" &&
                  !isNaN(Number(v1)) &&
                  typeof v2 === "string" &&
                  !isNaN(Number(v2))
                ) {
                  return Number(v1) - Number(v2);
                } else if (
                  typeof v1 === "string" &&
                  v1.includes("%") &&
                  typeof v2 === "string" &&
                  v2.includes("%")
                ) {
                  return parseFloat(v1) - parseFloat(v2);
                } else {
                  return v1.localeCompare(v2);
                }
              },
              headerAlign: "center",
              align: key === "operacao" ? "left" : "center",
              disableColumnMenu: true,
            }
      )
    : [];

  if (columns && isEditable) {
    const actionColumn = {
      type: "string",
      field: "ação",
      headerName: "ação",
      headerAlign: "center",
      align: "center",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (p: any) => (
        <ButtonComponent
          onClick={() => setProductEditFn(p.row)}
          text="Editar"
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        />
      ),
    };

    columns.splice(1, 0, actionColumn as unknown as GridColDef);
  }

  return {
    StyledDataGrid,
    rows,
    columns,
    localeText: ptBR,
    selectedRow,
    open,
    handleClickOpen,
    handleClose,
  };
}
