// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import CIDTCont from 'Cont/CIDT/CIDTCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function CIDTPage(): ReactElement {
  return (
    <>
      <Head>
        <title>CIDT</title>
      </Head>
      <CIDTCont />
    </>
  );
}
