import { useCallback, useEffect, useRef, useState } from 'react';

type UseImageUploaderModelProps = {
  onImageUpload: (imageUrl: string) => void;
};

export const useImageUploaderModel = ({
  onImageUpload,
}: UseImageUploaderModelProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem.');
        return;
      }
      setFile(file);
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target && event.target.result) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem.');
        return;
      }
      setFile(file);
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target && event.target.result) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUploadClick = () => {
    if (imageUrl) {
      onImageUpload(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    setFile(null);
  };

  const dropAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePaste = useCallback((e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (items) {
      // @ts-ignore
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            setFile(file);
            const reader = new FileReader();
            reader.onload = event => {
              if (event.target && event.target.result) {
                setImageUrl(event.target.result as string);
              }
            };
            reader.readAsDataURL(file);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    const dropArea = dropAreaRef.current;
    if (dropArea) {
      dropArea.addEventListener('paste', handlePaste as any);
    }
    return () => {
      if (dropArea) {
        dropArea.removeEventListener('paste', handlePaste as any);
      }
    };
  }, [handlePaste]);

  return {
    file,
    handleFileChange,
    handlePaste,
    handleDrop,
    handleDragOver,
    handleUploadClick,
    handleRemoveImage,
    imageUrl,
    dropAreaRef,
    fileInputRef,
    handleClick,
  };
};
