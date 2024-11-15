import { Container, Top, Bottom } from './styles';

type ListCardProps = {
  source: string;
  title: string;
  isFavourite: boolean;
  isPromoted: boolean;
  provider?: string;
};

function ListCard({
  source,
  title,
  isFavourite,
  isPromoted,
  provider,
}: ListCardProps) {
  return (
    <Container>
      <Top></Top>
      <Bottom></Bottom>
    </Container>
  );
}
