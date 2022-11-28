import { FC } from "react";
import "./navmenu.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../logo.svg";
import { useAppSelector } from "../../../redux/hooks";

export const NavMenu: FC = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"  "}
          Top News Stories
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/stories/world">World</Nav.Link>
            <Nav.Link href="/stories/science">Science</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/search">
            <img src="/search.png" width={30} height={30} alt="search icon" />
          </Nav.Link>
          <NavDropdown title="User ">
            <NavDropdown.Item>{user}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
