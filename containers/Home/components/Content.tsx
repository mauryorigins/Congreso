// ---Dependencys
import { Row,Col } from 'antd';
import { ReactElement } from 'react';
import Footer from './Footer';

// ----------------------------------------COMPONENT----------------------------------------
export default function Content(): ReactElement {
  return (
    <Row>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="escuelas">
      <p>
        UCM 
      </p>
    </Col>
    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="escuelas">
      <p>
        UNAM
      </p>
    </Col>
    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="escuelas">
      <p>
        UBA
      </p>
    </Col>
    <Col span={24} className="contenido">
      <p>
        Planteemos el estado de las relaciones tributarias actuales y sus problematicas de control e ineficacia.
        Induzcamos la reflexion y critica de los sistemas actuales para exponer alternativas actiales de relaciones cooperativa
      </p>
    </Col>
    <Col  xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}  className="icono-mapa">
      <img src='\images\mapa.png'/>
    </Col>
    <Col  xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}  className="texto-mapa">
      <h1>CDMX-MEX</h1>
    </Col>
    <Col  xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}  className="icono-calendario">
      <img src="\images\calendario.png" alt="19 y 20 de mayo 2022"/>
    </Col >
    <Col  xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}  className="texto-calendario">
      <h1>19 y 20<br/> de mayo<br/>2022</h1>
    </Col>
    </Row>
  );
}
