import { TitleComponent } from '@/components/Title';
import { Container, ContainerSelect, Top } from './styles';

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IGraphicsProps } from '@/types/IDashboard';
import { CustomTooltipContent } from './components';
import { useTheme } from 'styled-components';
import Select from '@/components/Select';
import { useStoreOptionsChart } from '@/lib/store';

export function Line({ data }: { data: IGraphicsProps[] }) {
  const theme = useTheme();
  const { optionsChart } = useStoreOptionsChart();

  return (
    <Container>
      <Top>
        <TitleComponent
          text="Quantidade de Vendas"
          style={{
            fontSize: '2rem',
          }}
        />
        <div />
        <ContainerSelect>
          <Select options={optionsChart} value={optionsChart[0]} />
        </ContainerSelect>
      </Top>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: 40,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6618c4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6618c4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ec37c2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ec37c2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            interval={0}
            style={{ fill: theme.icon, fontSize: '1rem' }}
            tickMargin={40}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={value =>
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(value)
            }
            style={{ fill: theme.icon, fontSize: '1rem' }}
            tickMargin={20}
          />
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#cccccc34"
          />
          <Legend
            verticalAlign="top"
            align="center"
            iconType="plainline"
            wrapperStyle={{ top: 10 }}
            iconSize={10}
            formatter={value => (
              <span
                style={{
                  fontSize: '1.2rem',
                  color: theme.text,
                  opacity: 0.8,
                  marginLeft: '4px',
                  fontWeight: 'normal',
                }}
              >
                {value}
              </span>
            )}
          />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={<CustomTooltipContent />}
          />
          <Area
            type="monotone"
            dataKey="Atual"
            stroke="#6618c4"
            fillOpacity={1}
            fill="transparent"
            strokeWidth={4}
            strokeLinecap="round"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="Passada"
            stroke="#ec37c2"
            fillOpacity={1}
            fill="transparent"
            strokeWidth={4}
            strokeLinecap="round"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}
