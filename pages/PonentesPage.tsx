// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import PonentesCont from 'Cont/Ponentes/PonentesCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function PonentesPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Ponentes</title>
      </Head>
      <PonentesCont />
    </>
  );
}
