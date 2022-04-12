/* eslint-disable react/require-default-props */
// ---Dependencys
import { ReactElement } from 'react';
import { Col } from 'antd';

import ProgramTitle from 'Cont/Programa/components/ProgramTitle';
// ----------------------------------------COMPONENT----------------------------------------
export default function ProgramTop(): ReactElement {
  return (
    <Col className="top-list">
      <ProgramTitle />
      <h1>18 de mayo 2022</h1>
      <table>
        <tr>
          <td>
            <b>10:00</b>
          </td>
          <td>Acto Inaugural</td>
          <td>Dr Rail Contreras Bustamante</td>
        </tr>
      </table>
    </Col>
  );
}
