"use client";

import { Login } from "@/components/Login";
import { Container, Main } from "./styles";

import { useState } from "react";
import { NotFound } from "@/components/NotFound";

export default function Home() {
  return (
    <Main>
      <Container>
        <NotFound text="Em desenvolvimento !" />
      </Container>
    </Main>
  );
}
