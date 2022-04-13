// ---Dependencys
import { ReactElement } from 'react';
import { Col, Row, Button } from 'antd';
import Link from 'next/link';

// ----------------------------------------COMPONENT----------------------------------------
export default function Footer(): ReactElement {
  return (
    <Row className="footer-programa" justify="space-around">
      <Col>
        <h1>
          Congreso
          <br />
          Iberoamericano
          <br />
          de Derecho Tributario
        </h1>
        <Link href="/InscripcionPage">
          <Button>INSCRIPCION</Button>
        </Link>
      </Col>
      <Col>
        <p>
          PROGRAMA
          <br />
          FICHA DE PAGO
          <br />
          DUDAS Y PREGUNTAS
          <br />
          MATERIALES DE APOYO
          <br />
          AULA VIRTUAL UNAM
          <br />
          SOLICITUD DE CONSTACIA DIGITAL
        </p>
      </Col>
      <Col className="cidt-footer">
        <span>CIDT</span>
      </Col>
    </Row>
  );
}
