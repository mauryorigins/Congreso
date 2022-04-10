/* eslint-disable max-len */
// ---Dependencys
import { ReactElement } from 'react';
import { Col, Row, Button } from 'antd';
// ---Components

// ----------------------------------------COMPONENT----------------------------------------
export default function InputPre(): ReactElement {
  return (
    <Row className="input-section">
      <Col xs={24} sm={24} md={24} lg={18} xl={18}>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Celular" />
        <input type="text" placeholder="Correo Electronico" />
      </Col>
      <Col xs={24} sm={24} md={24} lg={6} xl={6}>
        <Button>Quiero Informacion</Button>
      </Col>
    </Row>
  );
}
