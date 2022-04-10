// ---Dependencys
import React, { useState, ReactElement } from 'react';
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Row, Col } from 'antd';

// ---AUX COMPONENTS
interface AuxProps1 {
  currentPath: string;
}
function JustButtons(props: AuxProps1) {
  const { currentPath } = props;
  return (
    <>
      <Col xs={24} sm={24} md={24} lg={4} xl={4}>
        <Link href="/">
          <div
            className={currentPath === '/' ? 'nav-btn nav-border' : 'nav-btn'}
          >
            Home
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} md={24} lg={4} xl={4}>
        <Link href="/AntdExPage">
          <div
            className={
              currentPath === '/AntdExPage' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            CIDT
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} md={24} lg={4} xl={4}>
        <Link href="/ReduxExPage">
          <div
            className={
              currentPath === '/ReduxExPage' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            PROGRAMA
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} md={24} lg={4} xl={4}>
        <Link href="/ReduxExPage">
          <div
            className={
              currentPath === '/ReduxExPage' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            PONENTES
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} md={24} lg={4} xl={4}>
        <Link href="/ReduxExPage">
          <div
            className={
              currentPath === '/ReduxExPage' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            INSCRIPCION
          </div>
        </Link>
      </Col>
    </>
  );
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  currentPath: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ClientMenu(props: Props) : ReactElement {
  const { isMovil, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  function changeMenuVisibility() {
    setMenuVisible(!menuVisible);
  }
  if (isMovil) {
    return (
      <Row className="nav-div">
        <Col xs={24} sm={24} lg={16}>
          <Row>
            <Col xs={24} sm={24} lg={5}>
              <div
                className="nav-btn"
                onClick={changeMenuVisibility}
                role="button"
                tabIndex={0}
              >
                {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
              </div>
            </Col>
            {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
          </Row>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="nav-div">
      <Col xs={24} sm={24} lg={24}>
        <Row>
          <JustButtons currentPath={currentPath} />
        </Row>
      </Col>
    </Row>
  );
}

export default ClientMenu;
