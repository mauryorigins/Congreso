// ---Dependencys
import { ReactElement } from 'react'
import Head from 'next/head'
// ---Components
import ReduxEx from 'Cont/ReduxEx';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ReduxExPage (): ReactElement {
  return (
    <>
      <Head>
        <title>REDUX Example</title>
      </Head>
      <ReduxEx />
    </>
  );
}
