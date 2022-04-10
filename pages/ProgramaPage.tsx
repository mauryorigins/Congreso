// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import ProgramaCont from 'Cont/Programa/ProgramaCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ProgramaPage(): ReactElement {
  return (
    <>
      <Head>
        <title>REDUX Example</title>
      </Head>
      <ProgramaCont />
    </>
  );
}
