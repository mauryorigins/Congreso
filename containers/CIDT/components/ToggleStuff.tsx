/* eslint-disable max-len */
// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import TwinButtons from 'Cont/CIDT/components/TwinButtons';

// ----------------------------------------COMPONENT----------------------------------------
export default function Content(): ReactElement {
  return (
    <Row className="text-cont">
      <Col span={24}>
        <h1>Acerca Del Congreso</h1>
        <hr />
        <p>
          El curso esta dirigido a abogados, contadores, administradores y economistas que estudian u operan desde diversos enfoques, las proble4maticas de la relacion tributaria.
          <br />
          El objetivo principal es realizar un estado de la cuestion sobre las relaciones tributarias y su problematica actual, asi como inducir la reflexion y critica ed los sistemas actuales para concluir con algunas propuestas en cada segmento.
          <br />
          El congreso seria de dos maneras Presencial y Digital en aula virtual UNAM.
        </p>
      </Col>
      <Col span={24}>
        <TwinButtons />
      </Col>
    </Row>
  );
}
