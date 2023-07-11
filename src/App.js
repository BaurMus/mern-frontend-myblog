import React from "react";
import { Header } from "./components";
import Container from "@mui/material/Container";
import { Home, FullPost } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/1" element={<FullPost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
