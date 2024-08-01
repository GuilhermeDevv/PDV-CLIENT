"use client";
import { Container, Main } from "../styles";

import { CardsContainer } from "@/components/CardsContainer";
import { TitleComponent } from "@/components/Title";
import { useDashboard } from "@/utils/hooks/useDashboard";
import { GraphicsContainer } from "@/components/GraphicsContainer";
import { httpClientFactory } from "@/adapters";

export default function Dashboard() {
  const { data } = useDashboard({
    client: httpClientFactory(),
  });
  return (
    <Main>
      <Container>
        <TitleComponent text="DASHBOARD" />
        {data && (
          <>
            <CardsContainer data={data?.quantityInfo} />
            <GraphicsContainer
              quantityInfo={data?.quantityInfo}
              salesValue={data?.salesValue}
              salesQuantity={data?.salesQuantity}
            />
          </>
        )}
      </Container>
    </Main>
  );
}
