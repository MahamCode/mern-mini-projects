import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col className = 'text-center py-3'>
                Copyright &copy; MAHAM SIGNATURE
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
//it is added as default means no need to add curly braces {} while importing it in App.js