// ---Dependencys
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  changeResponsiveFlag,
  updatePath,
  updateParams
} from 'Actions/appInfo';
import { ReduxState } from 'Reducers';
// ---Components
import ClientMenu from 'Comp/NavBar/ClientMenu';
import GlobalComponents from 'Comp/NavBar/GlobalComponents';
import isMovilDetector from 'Others/isMovilDetector';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function NavbarCont () {
  const { pathname: currentPath, query: urlParams } = useRouter()
  // Redux States
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const updateResponsiveData = (flag: boolean) => dispatchR(changeResponsiveFlag(flag));
  const updateCurrentPath = () => dispatchR(updatePath(currentPath));
  const updateCurrentParams = () => dispatchR(updateParams(urlParams));

  const responsiveData =  isMovilDetector();
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => { updateCurrentPath() }, [currentPath]);
  useEffect(() => { updateCurrentParams() }, [urlParams]);

  return (
    <>
      <ClientMenu currentPath={currentPath} isMovil={isMovil} logo="/images/logoStoreL.png" />
      <GlobalComponents />
    </>
  );
};
