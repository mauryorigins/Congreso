// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col, Button } from 'antd';
// ---Types
interface Props {
    ButtonState19: () => void;
    ButtonState20: () => void;
}

// ----------------------------------------COMPONENT----------------------------------------
export default function TwinButtons(props:Props): ReactElement {
  const { ButtonState19, ButtonState20 } = props;
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button onClick={ButtonState19}>19 Mayo 2022</Button>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button onClick={ButtonState20}>20 Mayo 2022</Button>
      </Col>
    </Row>
  );
}
