import { ReactElement } from 'react';
import { Row,Col } from 'antd';

export default function Footer(): ReactElement {
    return (
        <Row>
            <Col span={8} className="fb">
        <img src="\images\facebook.png"/>
            </Col>
            <Col span={8} className="gaceta">
            <h1>
                <img src="\images\gaceta.jpg"/>
            </h1>
            </Col>
            <Col span={8} className="tl">
        <img src="\images\telegrama.png"/>
            </Col>
        </Row>
    )
}