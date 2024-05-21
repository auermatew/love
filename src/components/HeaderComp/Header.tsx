import { Col, Container, Row } from "react-bootstrap";
import './Header.css';

export function Header() {
    return (
        <header className="header bg-secondary">
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h1 className="opacity-50 text-black">❝Ismerd meg a lovaidat!❞</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
