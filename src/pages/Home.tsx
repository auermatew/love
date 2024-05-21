import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../components/HeaderComp/Header"
import { Main } from "../components/MainComp/Main"
import './Home.css';

export function Home() {
    return <>
        <Header/>
        <Container fluid className="full-width">
            <Row>
                <Col className="text-white text-center bg-dark">
                    <h2>Főoldal</h2>
                </Col>
            </Row>
        </Container>
        <Main/>
    </>
}