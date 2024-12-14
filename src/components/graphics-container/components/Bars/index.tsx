import { TitleComponent } from '@/components/Title';
import { Container, ContainerSelect, Top } from './styles';

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

import { CustomTooltipContent } from './components';
import { useTheme } from 'styled-components';
import Select from '@/components/Select';
import { useStoreOptionsChart } from '@/lib/store';
export function Bars({ data, title }: { data: any; title?: string }) {
  const theme = useTheme();
  const { optionsChart } = useStoreOptionsChart();

  return (
    <Container>
      <Top>
        <TitleComponent
          text={title ?? 'VENDAS'}
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
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: 40,
            bottom: 60,
          }}
          barSize={16}
        >
          <defs>
            <linearGradient id="colorAtual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#6618c4" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#6618c4" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorPassada" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#ec37c2" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#ec37c2" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#cccccc1c"
          />
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
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={<CustomTooltipContent />}
          />
          <Legend
            verticalAlign="top"
            align="center"
            iconType="circle"
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
          <Bar
            dataKey="Atual"
            fill={'url(#colorAtual)'}
            radius={[10, 10, 0, 0]}
            background={{
              fill: theme.shadow,
              radius: 10,
              opacity: 0.3,
            }}
          />
          <Bar
            dataKey="Passada"
            fill={'url(#colorPassada)'}
            radius={[10, 10, 0, 0]}
            background={{ fill: theme.shadow, radius: 10, opacity: 0.3 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
