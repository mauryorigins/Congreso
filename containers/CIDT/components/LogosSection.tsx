// ---Dependencys
import { ReactElement } from 'react';
import { Col, Row } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function LogosSection(): ReactElement {
  return (
    <Row className="logos" justify="space-between">
      <Col className="FD" xs={24} sm={24} md={24} lg={8} xl={8}>
        <img src="/images/AcercaDe/FD.png" alt="" />
      </Col>
      <Col className="UBA" xs={24} sm={24} md={24} lg={8} xl={8}>
        <img src="/images/AcercaDe/UBA.png" alt="" />
      </Col>
      <Col className="EPJ" xs={24} sm={24} md={24} lg={8} xl={8}>
        <img src="/images/AcercaDe/EPJ.jpg" alt="" />
      </Col>
    </Row>
  );
}
