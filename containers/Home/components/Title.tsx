// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function Title(): ReactElement {
  return (
    <Row className='titulo'>
      <Col className="cidt" xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <p>C I D T</p>
      </Col>
    <Col className='congreso' xs={24} sm={24} md={24} lg={16} xl={12} xxl={12}>
        <p>CONGRESO IBEROAMERICANO DE DERECHO TRIBUTARIO</p>
    </Col>
    </Row>
  );
}
