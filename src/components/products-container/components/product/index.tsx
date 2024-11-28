import {
  Bottom,
  CategoryContainer,
  Container,
  ContainerIcon,
  Dropdown,
  DropdownItem,
  ImageContainer,
  Middle,
  MoreInfo,
  ProductInfo,
  Status,
  Supplier,
  Top,
} from './styles';

import styles from './style.module.css';

import { product } from '@/types/product';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as c from '@mui/icons-material';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Image from 'next/image';
import { useEffect, useState } from 'react';
type ProductProps = {
  data: product;
};

export function Product({ data }: ProductProps) {
  const [IconComponent, setIconComponent] = useState<React.ElementType | null>(
    null
  );

  useEffect(() => {
    const loadIcon = async () => {
      if (data.categoria?.iconeCategoria) {
        try {
          //@ts-ignore
          setIconComponent(() => c[data.categoria.iconeCategoria]);
        } catch (error) {
          console.error(
            `Erro ao carregar o ícone: ${data.categoria.iconeCategoria}`,
            error
          );
        }
      }
    };

    loadIcon();
  }, [data.categoria?.iconeCategoria]);

  const handleMoreInfoClick = () => {
    Swal.fire({
      title: 'Deseja realmente deletar este produto?',
      showCancelButton: true,
      showDenyButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: styles['btn-danger'],
        cancelButton: styles['btn-success'],
      },
      buttonsStyling: false,
    }).then(result => {
      if (result.isConfirmed) {
        handleDeleteClick();
      } else if (result.isDenied) {
        handleDeleteClick();
      }
    });
  };

  const handleDeleteClick = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        handleConfirmDelete();
      }
    });
  };

  const handleConfirmDelete = () => {
    Swal.fire('Deletado!', 'Seu arquivo foi deletado.', 'success');
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEditClick = () => {
    // Lógica de edição (ainda não faz nada)
    setIsDropdownOpen(false);
  };

  const handleDeleteOptionClick = () => {
    setIsDropdownOpen(false);
    handleMoreInfoClick();
  };

  return (
    <Container>
      <Status $cor={data.cor} />
      <Top>
        <ImageContainer $cor={data.categoria?.corCategoria!}>
          <CategoryContainer $cor={data.categoria?.corCategoria!}>
            {IconComponent && <IconComponent />}
          </CategoryContainer>
          <Image
            src={data.url}
            alt={data.nome}
            width={70}
            height={70}
            quality={100}
          />
        </ImageContainer>
        <MoreInfo onClick={toggleDropdown}>
          {Array.from({ length: 3 }).map((_, index) => (
            <span key={index}></span>
          ))}
          {isDropdownOpen && (
            <Dropdown>
              <DropdownItem onClick={handleEditClick}>Editar</DropdownItem>
              <DropdownItem onClick={handleDeleteOptionClick}>
                Excluir
              </DropdownItem>
            </Dropdown>
          )}
        </MoreInfo>
      </Top>
      <Middle>
        <strong>{data.nome}</strong>
        <p title={data.descricao}>{data.descricao}</p>
        <Supplier>{data.fornecedor}</Supplier>
        <ProductInfo>
          <ContainerIcon>
            <ProductionQuantityLimitsIcon />
          </ContainerIcon>

          {data.estoque >= 0 && (
            <>
              <span>Disponível:</span>{' '}
              <span>
                {data.estoque} {data.estoque > 1 ? 'unidades' : 'unidade'}
              </span>
            </>
          )}
          {data.estoque < 0 && <span>Indisponível</span>}
        </ProductInfo>
        <ProductInfo>
          <ContainerIcon>
            <MonetizationOnIcon />
          </ContainerIcon>

          <span>Preço:</span>
          <span>{data.preco}</span>
        </ProductInfo>
      </Middle>
      <Bottom></Bottom>
    </Container>
  );
}
