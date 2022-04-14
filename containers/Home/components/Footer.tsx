import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';

export default function Footer(): ReactElement {
  return (
    <Row>
      <Col span={8} className="fb">
        <Link href="https://www.facebook.com">
          <img src="\images\facebook.png" alt="lo sentimos la imagen no se pudo encontrar" />
        </Link>
      </Col>
      <Col span={8} className="gaceta">
        <h1>
          <Link href="https://www.gaceta.unam.mx">
            <img src="\images\gaceta.jpg" alt="lo sentimos la imagen no se pudo encontrar" />
          </Link>
        </h1>
      </Col>
      <Col span={8} className="tl">
        <Link href="https://web.telegram.org/k/">
          <img src="\images\telegram.png" alt="lo sentimos la imagen no se pudo encontrar" />
        </Link>
      </Col>
    </Row>
  );
}
