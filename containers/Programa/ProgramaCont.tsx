/* eslint-disable react/jsx-no-bind */
// ---Dependencys
import { ReactElement, useState } from 'react';
import { Row } from 'antd';
// ---CommonComps
import GoBack from 'CComps/GoBack';
import ProgramList from 'Cont/Programa/components/ProgramList';
import ProgramTop from 'Cont/Programa/components/ProgramTop';
import TwinButtons from 'Cont/Programa/components/TwinButtons';
// ---Others
import { dataDay19, dataDay20 } from 'Others/dataProgram';

interface Day {
  day19:boolean,
  day20:boolean
}
// ----------------------------------------COMPONENT----------------------------------------
export default function AntdEx(): ReactElement {
  // Redux States
  const [changeDay, setChangeDay] = useState<Day>({ day19: true, day20: false });
  // ---
  function ButtonState19() {
    const D18:Day = {
      day19: true,
      day20: false
    };
    setChangeDay(D18);
  }
  function ButtonState20() {
    const D19:Day = {
      day19: false,
      day20: true
    };
    setChangeDay(D19);
  }
  return (
    <>
      <Row className="list-container" justify="center">
        <ProgramTop />
        <TwinButtons ButtonState19={ButtonState19} ButtonState20={ButtonState20} />
        {
        (changeDay.day19 === true)
          ? dataDay19.map((data, i) => (
            <ProgramList
              numberItem={i}
              breakTime={data.breakTime}
              tituloBold={data.tituloBold}
              titulo={data.titulo}
              initHrs={data.initHrs}
              endHrs={data.endHrs}
              evento={data.evento}
              participante={data.participante}
            />
          ))
          : dataDay20.map((data, i) => (
            <ProgramList
              numberItem={i}
              breakTime={data.breakTime}
              tituloBold={data.tituloBold}
              titulo={data.titulo}
              initHrs={data.initHrs}
              endHrs={data.endHrs}
              evento={data.evento}
              participante={data.participante}
            />
          ))
}
      </Row>
      <div>
        <GoBack />
      </div>
    </>
  );
}
