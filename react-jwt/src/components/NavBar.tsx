import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthProvider";

function NavBar() {
  const { acessToken } = useAuthContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (acessToken === null || acessToken === "") {
      setTimeout(() => {
        navigate("/", { replace: true })
      }, 1000)
    }
  }, [])

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/app/weatherforecast">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/app/weatherforecast">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
