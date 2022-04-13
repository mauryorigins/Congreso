// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col, Button } from 'antd';
// ---Components

// ----------------------------------------COMPONENT----------------------------------------
export default function TwinButtons(): ReactElement {
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button>Acceso Aula Virtual</Button>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button>Inscripcion y formato de pago</Button>
      </Col>
    </Row>
  );
}
