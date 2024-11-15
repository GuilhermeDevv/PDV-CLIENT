import { memo } from 'react';
import { Modal } from '@mui/material';
import { Popup } from './styles';

interface IModalComponentProps {
  handleClose: () => void;
  handlePrint: () => void;
  open: boolean;
  selectedRow: {
    produtos: string[];
  } | null;
}

const component = ({
  handleClose,
  handlePrint,
  open,
  selectedRow,
}: IModalComponentProps) => {
  return (
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
  );
};

export const ModalComponent = memo(component);
