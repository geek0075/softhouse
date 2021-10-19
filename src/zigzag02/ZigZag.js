import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ZigZag.css';
import img_app from './img/img_app.jpeg';
import app5 from './img/app5.jpeg';

function ZigZag() {
    return (
        <>
            <div style={{ textAlign : "center" }}>
                <h2>Responsive Zig Zag Layout Example</h2>
                <p>Resize the browser window to see the effect.</p>
            </div>
            {/*<!-- The App Section -->*/}
            <Container fluid="true" className="padding-64">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} className="padding-20 align-center">
                        <h1 className="xlarge-font"><b>The App</b></h1>
                        <h1 className="large-font" style={{ color : "MediumSeaGreen" }}><b>Why buy it?</b></h1>
                        <p><span style={{ fontSize : "36px" }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Button type="button" className="button">Download Application</Button>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className="padding-20">
                        <img src={img_app} width="335" height="471" />
                    </Col>
                </Row>
            </Container>
            {/*<!-- Clarity Section -->*/}
            <Container fluid="true" className="padding-64" style={{ backgroundColor : "#f1f1f1" }}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={4} className="padding-20">
                        <img src={app5} width="335" height="471" />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} className="padding-20 align-center">
                        <h1 className="xlarge-font"><b>Clarity</b></h1>
                        <h1 className="large-font" style={{ color : "red" }}><b>Pixels, who?</b></h1>
                        <p><span style={{ fontSize : "24px" }}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="button" style={{ backgroundColor : "red" }}>Read More</button>
                    </Col>
                </Row>
            </Container>
            {/*<!-- The App Section -->*/}
            <Container fluid="true" className="padding-64">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} className="padding-20 align-center">
                        <h1 className="xlarge-font"><b>The App</b></h1>
                        <h1 className="large-font" style={{ color : "MediumSeaGreen" }}><b>Why buy it?</b></h1>
                        <p><span style={{ fontSize : "36px" }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className="button">Download Application</button>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className="padding-20">
                        <img src={img_app} width="335" height="471" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
  
export default ZigZag;