/* eslint-disable max-len */
// ---Dependencys
import { ReactElement } from 'react';
import { Col, Row } from 'antd';
// ---Components
import InputPre from 'Cont/Inscripcion/Components/Input-pre';

// ----------------------------------------COMPONENT----------------------------------------
export default function InscripcionCont(): ReactElement {
  return (
    <Row className="inscripciones-container" justify="center">
      <Col>
        <h1>PRE-REGISTRO</h1>
        <p>
          Al llenar este formulario le llegara un correo con la informacion  y detalles del congreso(ponentes, temas, hosp[edaje y cuotas.)
          y en caso de ser necesario estaremos en continuo contacto para ayudarle en su proceso de inscripcion
        </p>
      </Col>
      <InputPre />
    </Row>
  );
}
