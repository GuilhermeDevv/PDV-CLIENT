import { Container, Main } from "../styles";

import { Metadata } from "next";

import { CardsContainer } from "@/components/CardsContainer";
import { TitleComponent } from "@/components/Title";
import { useDashboard } from "./hooks/useDashboard";
import { GraphicsContainer } from "@/components/GraphicsContainer";

export const metadata: Metadata = {
  title: "DASHBOARD - SANTOS CONSTRUÇÕES E REFORMAS - PDV",
  description: "SANTOS CONSTRUÇÕES E REFORMAS - PDV",
};

export default function Home() {
  const { data } = useDashboard();
  return (
    <Main>
      <Container>
        <TitleComponent text="DASHBOARD" />
        <CardsContainer data={data} />
        <GraphicsContainer />
      </Container>
    </Main>
  );
}
