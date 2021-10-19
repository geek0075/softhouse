import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/logo-text-h30-white.png';

import './Carousel01.css';

function Carousel01() {
    return (
        <>
            <header>
                <Navbar expand="md" bg="dark" variant="dark" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img
                                src={logo}
                                width="220"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Softhouse LLC logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarCollapse" />
                        <Navbar.Collapse id="navbarCollapse">
                            <Nav className="me-auto mb-2 mb-md-0" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="#" active="true">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link disabled="true">Disabled</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="outline-success" type="submit">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Carousel>
                    <Carousel.Item active='true'>
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                        <Container>
                            <Carousel.Caption className="text-start">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><Button variant="primary" size="lg" href="#">Sign up today</Button></p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                        <Container>
                            <Carousel.Caption>
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><Button variant="primary" size="lg" href="#">Learn more</Button></p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                        <Container>
                            <Carousel.Caption className="text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><Button variant="primary" size="lg" href="#">Browse gallery</Button></p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                </Carousel>
                <Container className="marketing">
                    <Row>
                        <Col lg={4}>
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><Button variant="secondary" href="#">View details &raquo;</Button></p>
                        </Col>
                        <Col lg={4}>
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Heading</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                            <p><Button variant="secondary" href="#">View details &raquo;</Button></p>
                        </Col>
                        <Col lg={4}>
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Heading</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                            <p><Button variant="secondary" href="#">View details &raquo;</Button></p>
                        </Col>
                    </Row>

                    <hr className="featurette-divider"/>

                    <Row className="featurette">
                        <Col md={7}>
                            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                        </Col>
                        <Col md={5}>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                        </Col>
                    </Row>

                    <hr className="featurette-divider"/>

                    <Row className="featurette">
                        <Col md={{ span: 7, order: 2 }}>
                            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                        </Col>
                        <Col md={{ span: 5, order: 1 }}>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                        </Col>
                    </Row>

                    <hr className="featurette-divider"/>

                    <Row className="featurette">
                        <Col md={7}>
                            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                        </Col>
                        <Col md={5}>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                        </Col>
                    </Row>

                    <hr className="featurette-divider"/>

                </Container>
                <Container>
                    <p className="float-end"><a href="#">Back to top</a></p>
                    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </Container>
            </main>
        </>
    );
}
  
export default Carousel01;