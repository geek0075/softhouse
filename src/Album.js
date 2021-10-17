// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Album.css';

// https://react-bootstrap.github.io/utilities/transitions/
// import Collapse from 'react-bootstrap/Collapse'

// https://react-bootstrap.github.io/layout/grid
// https://react-bootstrap.github.io/layout/grid/#container-props
import Container from 'react-bootstrap/Container';
// https://react-bootstrap.github.io/layout/grid/#row-props
import Row from 'react-bootstrap/Row';
// https://react-bootstrap.github.io/layout/grid/#col-props
import Col from 'react-bootstrap/Col';
// https://react-bootstrap.github.io/components/navbar/#navbar-props
import Navbar from 'react-bootstrap/Navbar';

function Album() {
    return (
        <div className="Album">
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#" className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                            <strong>Album</strong>
                        </Navbar.Brand>
                        <Navbar.Toggle data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbarHeader">
                            <div>
                                <Container>
                                    <Row>
                                        <Col sm={8} md={7} py={4}>
                                            <h4 className="text-white">About</h4>
                                            <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} md={{ offset: 1 }} py={4}>
                                            <h4 className="text-white">Contact</h4>
                                            <ul className="list-unstyled">
                                                <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                                <li><a href="#" className="text-white">Like on Facebook</a></li>
                                                <li><a href="#" className="text-white">Email me</a></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}
  
export default Album;