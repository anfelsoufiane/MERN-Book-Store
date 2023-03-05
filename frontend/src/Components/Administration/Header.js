import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/admin">BookStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/books">Books</Nav.Link>
            <Nav.Link href="/admin/categories">Categories</Nav.Link>
            <Nav.Link href="/admin/users">Responsables</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
    </>
  );
}

export default ColorSchemesExample;
