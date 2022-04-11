/* eslint-disable react/require-default-props */
// ---Dependencys
import { ReactElement } from 'react';
// ---Types
interface Props{
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
    endHrs, evento, initHrs, participante, titulo, breakTime
  } = props;
  return (
    <>
      <h2>{breakTime}</h2>
      <h1>{titulo}</h1>
      <tr>
        <td>
          <b>{initHrs}</b>
          <br />
          <b>{endHrs}</b>
        </td>
        <td>{evento}</td>
        <td>{participante}</td>
      </tr>
    </>
  );
}
