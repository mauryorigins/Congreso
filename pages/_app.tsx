// ---Dependencys
import { ReactElement } from 'react';
// ---Types
import { AppProps } from 'next/app';
// ---Containers
import NavbarCont from 'Cont/NavbarCont';
// ---Others
import 'Styles/index.less';
// ---Redux
import { wrapper } from '@Redux/store';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <NavbarCont />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
