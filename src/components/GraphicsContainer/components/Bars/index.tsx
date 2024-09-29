import { TitleComponent } from '@/components/Title';
import { Container } from './styles';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IGraphicsProps } from '@/types/IDashboard';
import { CustomTooltipContent } from './components';
export function Bars({
  data,
  title,
}: {
  data: IGraphicsProps[];
  title?: string;
}) {
  return (
    <Container>
      <TitleComponent text={title ?? 'VENDAS (R$) - SEMANAIS'} />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 80,
            right: 30,
            left: 30,
            bottom: 10,
          }}
          barSize={20}
        >
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#cccccc34"
          />
          <XAxis dataKey="name" tickLine={false} interval={0} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={value =>
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(value)
            }
          />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={<CustomTooltipContent />}
          />
          <Legend />
          <Bar dataKey="Atual" fill="#F00" radius={[10, 10, 0, 0]} />
          <Bar dataKey="Passada" fill="#FFF" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
