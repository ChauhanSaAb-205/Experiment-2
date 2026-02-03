import { Navbar, Nav, Container } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
        <Navbar.Brand href="#">TechNova</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="ms-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Features</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComponent
