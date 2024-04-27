import { TitleComponent } from "@/components/Title";
import { Container } from "./styles";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function Bars() {
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
      <TitleComponent text="VENDAS - SEMANA" />
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
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend />
          <Bar dataKey="Atual" fill="#F00" />
          <Bar dataKey="Passada" fill="#FFF" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
