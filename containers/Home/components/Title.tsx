// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function Title(): ReactElement {
  return (
    <Row className='titulo'>
      <Col className="cidt" span={10}>
        <p>CIDT</p>
      </Col>
    <Col className='congreso' span={14}>
        <p>CONGRESO IBEROAMERICANO DE DERECHO TRIBUTARIO</p>
    </Col>
    </Row>
  );
}
