// ---Dependencys
import { ReactElement } from 'react'
import Head from 'next/head'
// ---Components
import ImageExCont from 'Cont/ImageExCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ImageExPage (): ReactElement {
  return (
    <>
      <Head>
        <title>Ejemplo con imagen</title>
      </Head>
      <ImageExCont />
    </>
  );
}
