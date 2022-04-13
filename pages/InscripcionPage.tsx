// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import InscripcionCont from 'Cont/Inscripcion/InscripcionCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function InscripcionPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Pre-Registro</title>
      </Head>
      <InscripcionCont />
    </>
  );
}
