import React from "react";
import { Header } from "./components";
import Container from "@mui/material/Container";
import { Home, FullPost, AddPost, Login, Registration } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/1" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
