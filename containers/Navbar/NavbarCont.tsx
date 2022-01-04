// ---Dependencys
import { ReactElement } from 'react';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from '@Redux/globalReducers';
// ---Components
import ClientMenu from 'Cont/Navbar/components/ClientMenu';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function NavbarCont(): ReactElement {
  // --- Const, Hooks, States
  // Redux States
  const { isMovil, currentPath } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);

  return (
    <ClientMenu currentPath={currentPath} isMovil={isMovil} logo="/images/logoStoreL.png" />
  );
}
