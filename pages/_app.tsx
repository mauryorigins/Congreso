// ---Dependencys
import { ReactElement } from 'react'
// ---Types
import { AppProps } from 'next/app';
// ---Others
import 'antd/dist/antd.less';
import "../styles/main.less";
// ---Redux
import { wrapper } from 'store';

function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)