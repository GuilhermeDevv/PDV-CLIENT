import { Container } from './styles';
import { useTheme } from 'styled-components';

import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { memo } from 'react';

interface LineProps {
  data: {
    v1: number;
    v2: number;
    color: string;
  };
}

const LineComponent = memo(({ data }: LineProps) => {
  const theme = useTheme();

  const transformedData = [
    { name: 'Start', value: data.v1 },
    { name: 'End', value: data.v2 },
  ];

  const color = theme[data.color] || data.color; // Garantir que a cor exista no tema ou usar a cor diretamente

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={transformedData}>
          <defs>
            <linearGradient
              id={`colorGradient${data.color}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="bump"
            dataKey="value"
            stroke={color}
            fillOpacity={1}
            fill={`url(#colorGradient${data.color})`}
            dot={false}
            strokeWidth={6}
            strokeLinecap="round"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
});

LineComponent.displayName = 'LineComponent';

export { LineComponent };
