import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import sign from './logo-30x30.png';
import logo from './logo-text-h30-white.png';

import './Navbar02.css';

function Navbar02() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={sign}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Softhouse LLC logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="220"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Softhouse LLC logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={sign}
                            width="30"
                            height="30"
                            className="d-inline-block align-middle" />
                        {' '}
                        <span className='align-middle'><span className='logo-medium'>Soft</span><span className='logo-thin'>house</span></span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
  
export default Navbar02;