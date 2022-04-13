// ---Dependencys
import { ReactElement } from 'react';
import { Row } from 'antd';
// ---Components
import ToggleStuff from 'Cont/CIDT/components/ToggleStuff';
import LogosSection from 'Cont/CIDT/components/LogosSection';

// ---CommonComps
import GoBack from 'CComps/GoBack';

// ----------------------------------------COMPONENT----------------------------------------
export default function AntdEx(): ReactElement {
  return (
    <Row className="CIDT-container">
      <LogosSection />
      <ToggleStuff />
      <GoBack />
    </Row>
  );
}
