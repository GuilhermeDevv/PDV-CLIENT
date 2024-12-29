import React, { useEffect, useRef } from 'react';
import { useImageUploaderModel } from './hooks/use-image-uploader-model';
import { Container, ImagePreview, DropArea, RemoveButton } from './styles';

export type ImageUploaderProps = {
  onImageUpload: (imageUrl: string) => void;
};

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageUpload,
}) => {
  const {
    file,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleRemoveImage,
    imageUrl,
    dropAreaRef,
    fileInputRef,
    handleClick,
  } = useImageUploaderModel({ onImageUpload });

  return (
    <Container>
      {!imageUrl && (
        <DropArea
          ref={dropAreaRef}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          Arraste e solte a imagem aqui ou clique para selecionar
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </DropArea>
      )}
      {imageUrl && (
        <>
          <ImagePreview src={imageUrl} alt="Preview" />
          <RemoveButton onClick={handleRemoveImage}>
            Remover Imagem
          </RemoveButton>
        </>
      )}
    </Container>
  );
};
