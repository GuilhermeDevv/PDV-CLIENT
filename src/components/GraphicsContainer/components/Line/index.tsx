import { TitleComponent } from "@/components/Title";
import { Container } from "./styles";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function Line() {
  const data = [
    { name: "Segunda", Atual: 4000, Passada: 2400 },
    { name: "Terça", Atual: 3000, Passada: 1398 },
    { name: "Quarta", Atual: 2000, Passada: 9800 },
    { name: "Quinta", Atual: 2780, Passada: 3908 },
    { name: "Sexta", Atual: 1890, Passada: 4800 },
    { name: "Sábado", Atual: 2390, Passada: 3800 },
    { name: "Domingo", Atual: 3490, Passada: 4300 },
  ];

  return (
    <Container>
      <TitleComponent text="CLIENTES  - SEMANA" />
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 80,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F00" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#cccccc34"
          />
          <Legend iconType="plainline" />
          <Tooltip cursor={false} />
          <Area
            type="monotone"
            dataKey="Atual"
            stroke="#F00"
            fillOpacity={1}
            fill="url(#colorUv)"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="Passada"
            stroke="#FFF"
            fillOpacity={1}
            fill="url(#colorPv)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}
