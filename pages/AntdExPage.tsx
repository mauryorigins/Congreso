// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import AntdEx from 'Cont/AntdEx/AntdExCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function AntdExPage(): ReactElement {
  return (
    <>
      <Head>
        <title>ANTD Example</title>
      </Head>
      <AntdEx />
    </>
  );
}
