import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNav() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand>Sofia Andrino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="#link">Fitness</Nav.Link>
            <NavDropdown title="Trackers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/MoodTracker">Mood</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Runs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Workouts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Journal
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

