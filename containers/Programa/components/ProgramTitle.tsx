/* eslint-disable react/require-default-props */
// ---Dependencys
import { ReactElement } from 'react';
import { Col, Row } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function ProgramTitle(): ReactElement {
  return (
    <Row className="title" justify="space-between">
      <Col>
        <h1>CIDT</h1>
      </Col>
      <Col><h2>PROGRAMA DE ACTIVIDADES</h2></Col>
    </Row>
  );
}
