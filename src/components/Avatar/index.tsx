import { useAvatar } from './hooks';
import { Avatar } from './styles';
import Image from 'next/image';
import { ImageProps } from 'next/image';
type AvatarProps = Partial<ImageProps> & {};

export function AvatarComponent({ width, height, ...props }: AvatarProps) {
  const { user, handleResetCache } = useAvatar();

  return (
    <Avatar>
      {true && (
        <Image
          {...props}
          onClick={handleResetCache}
          src={'/eu.jpeg'}
          alt={user.nome}
          quality={100}
          width={width ?? 32}
          height={height ?? 32}
          style={{ objectFit: 'contain' }}
        />
      )}
      {/* {!user.imagem && <span>{user.nome[0]}</span>} */}
    </Avatar>
  );
}
