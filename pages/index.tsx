// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Home from 'Cont/Home/HomeCont';

export default function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>INICIO</title>
      </Head>
      <Home />
    </>
  );
}
