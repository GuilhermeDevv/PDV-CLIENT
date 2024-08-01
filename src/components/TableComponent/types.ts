import { IProduct } from "@/types/IProduct";
import { ITable } from "@/types/ITable";
export interface ITableComponentProps {
  table: ITable[];
  isEditable?: boolean;
  isOnline?: boolean;
  setProductEdit?: (product: IProduct) => void;
  handleChangeStatus?: (id: number, status: boolean) => void;
}
