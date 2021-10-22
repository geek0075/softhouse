import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import sign from './img/logo-30x30.png';

import './TopNav.css';

class TopNav extends React.Component {

    constructor(props) {
        super(props);
    }

    handleScroll(event) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || window.scrollY > 20) {
            var navbar = document.querySelector(".navbar");
            if (navbar) {
                navbar.classList.remove('bg-transparent');
            }
        } else {
            var navbar = document.querySelector(".navbar");
            if (navbar) {
                navbar.classList.add('bg-transparent');
            }
        }
    }
        
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <Navbar expand="md" bg="dark" variant="dark" fixed="top" className="bg-transparent">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src={sign}
                            width="30"
                            height="30"
                            className="d-inline-block align-middle" />
                        {' '}
                        <span className='align-middle'><span className='logo-medium'>Soft</span><span className='logo-thin'>house</span></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarCollapse" />
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="me-auto mb-2 mb-md-0" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="#" active="true">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#">Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#">Services</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-light" type="submit" style={{ marginRight : '4px' }}>About Us</Button>
                            <Button variant="outline-light" type="submit">Contact Us</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
  
export default TopNav;