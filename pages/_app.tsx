// ---Dependencys
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
// ---Types
import { AppProps } from 'next/app';
// ---AppConfig
import isMovilDetector from 'AppConfig/isMovilDetector';
// ---Others
import 'Styles/index.less';
// ---Redux
import { wrapper } from '@Redux/store';
import {
  changeResponsiveFlag,
  updatePath,
  updateParams
} from '@Redux/appInfo/actions';
import {
  ResponsiveData
} from '@Redux/appInfo/customTypes';
// ---Containers
import NavbarCont from 'Cont/Navbar/NavbarCont';
import GlobalComponents from 'Cont/GlobalComponents/GlobalComponentsCont';

function App({ Component, pageProps }: AppProps): ReactElement {
  // --- Const, Hooks, States
  const responsiveData = isMovilDetector();
  const { pathname: currentPath, query: urlParams } = useRouter();
  // Redux Actions
  const dispatchR = useDispatch();
  const updateResponsiveData = (data: ResponsiveData) => dispatchR(changeResponsiveFlag(data));
  const updateCurrentPath = () => dispatchR(updatePath(currentPath));
  const updateCurrentParams = () => dispatchR(updateParams(urlParams));

  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => { updateCurrentPath(); }, [currentPath]);
  useEffect(() => { updateCurrentParams(); }, [urlParams]);
  return (
    <>
      <NavbarCont />
      <GlobalComponents />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
