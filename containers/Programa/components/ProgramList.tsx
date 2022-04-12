/* eslint-disable react/require-default-props */
// ---Dependencys
import { ReactElement } from 'react';
import { Col } from 'antd';

// ---Types
interface Props{
  numberItem:number;
    tituloBold?: string;
    breakTime?: string;
    titulo?: string;
    initHrs: string;
    endHrs: string;
    evento: string;
    participante: string;
}
// ----------------------------------------COMPONENT----------------------------------------
export default function ProgramList(props:Props): ReactElement {
  const {
    endHrs, evento, initHrs, participante, titulo, breakTime, tituloBold, numberItem
  } = props;
  const isEven = (numberItem % 2 === 0);
  return (
    <Col className={isEven ? 'event-list event-list-even' : 'event-list'}>
      <h2>{breakTime}</h2>
      <h1>
        <b>{tituloBold}</b>
        {' '}
        {titulo}
      </h1>
      <table>
        <tr>
          <td>
            <b>{initHrs}</b>
            <br />
            <b>{endHrs}</b>
          </td>
          <td>{evento}</td>
          <td>{participante}</td>
        </tr>
      </table>
    </Col>
  );
}
