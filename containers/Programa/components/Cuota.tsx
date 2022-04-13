// ---Dependencys
import { ReactElement } from 'react';
import { Col, Row } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function Cuota(): ReactElement {
  return (
    <Row className="cuota">
      <Col>
        <h1>CUOTA DE RECUPERACION</h1>
      </Col>
      <Col>
        <table>
          <tr>
            <td>PRESENCIAL</td>
            <td>$1,000.00 MX</td>
          </tr>
          <tr>
            <td>AULA Virtual</td>
            <td>$800.00 MX</td>
          </tr>
          <tr>
            <td>COMUNIDAD UNAM</td>
            <td>$600.00 MX</td>
          </tr>
        </table>
      </Col>
    </Row>
  );
}
