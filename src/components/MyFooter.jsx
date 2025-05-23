import { Container, Row, Col } from "react-bootstrap"

const MyFooter = function () {
  return (
    <Container fluid className="bg-dark text-light mt-auto py-3 my-footer">
      <Row>
        <Col className="text-center text-light">
          © {new Date().getFullYear()} - Meteo
        </Col>
      </Row>
    </Container>
  )
}

export default MyFooter
