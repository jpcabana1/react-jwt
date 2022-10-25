import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthProvider";
import { getToken, saveToken } from "../services/LoginService";

function NavBar() {
  const { acessToken } = useAuthContext()
  const token: string | undefined = getToken()
  const navigate = useNavigate()
  useEffect(() => {
    if (token === undefined || token === "") {
      setTimeout(() => {
        navigate("/login", { replace: true })
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
          <Nav>
            <Nav.Link
              as={Link} to="/login"
              onClick={() => saveToken("")}
            ><Button variant="outline-warning">Logout</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
