// ---Dependencys
import { ReactElement, useState } from 'react';
import {
  Button, Row, Col, Statistic
} from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

// ---AUX COMPONENTS
function Show() {
  return (
    <>
      <CheckCircleOutlined />
      {' '}
      Show data
    </>
  );
}
function Hide() {
  return (
    <>
      <CloseCircleOutlined />
      {' '}
      Hide Data
    </>
  );
}

function CoolData() {
  return (
    <Row className="cool-data" gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          Recharge
        </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} loading />
      </Col>
    </Row>
  );
}

// ----------------------------------------COMPONENT----------------------------------------
export default function Content(): ReactElement {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <section>
        <p>
          <strong>Antd</strong>
          {' '}
          with custom colors working
        </p>
        <div>
          <Button type="primary" onClick={() => setFlag(!flag)}>
            {flag ? <Hide /> : <Show />}
          </Button>
        </div>
        {flag && <CoolData />}
      </section>
    </>
  );
}
