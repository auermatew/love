import { Col, Container, Row } from "react-bootstrap";
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <Container fluid className="full-width bg-dark">
                <Row className="text-white bg-dark justify-content-center">
                    <Col xs="auto">
                        <p className="mt-4">GAA | 2024.04.12 - 2024.05.20</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
