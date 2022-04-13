// ---Dependencys
import { Row,Col } from 'antd';
import { ReactElement } from 'react';
import Footer from './Footer';

// ----------------------------------------COMPONENT----------------------------------------
export default function Content(): ReactElement {
  return (
    <Row>
      <Col span={8} className="escuelas">
      <p>
        UCM 
      </p>
    </Col>
    <Col span={8} className="escuelas">
      <p>
        UNAM
      </p>
    </Col>
    <Col span={8} className="escuelas">
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
    <Col span={12} className="icono-mapa">
      <img src='\images\mapa.png'/>
    <h1>CDMX - MEX</h1>
    </Col>
    <Col span={12} className="icono-calendario">
      <img src="\images\calendario.png"/>
    <h1>19 y 20 de mayo 2022</h1>
    </Col >
    </Row>
  );
}
