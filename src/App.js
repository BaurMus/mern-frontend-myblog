import React from "react";
import { Header } from "./components";
import Container from "@mui/material/Container";
import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
