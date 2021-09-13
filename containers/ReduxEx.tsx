// ---Dependencys
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
// ---Types
import { ReduxState } from 'Reducers';
// ---CommonComps
import GoBack from 'CComps/GoBack';

// ----------------------------------------COMPONENT----------------------------------------
export default function AntdEx(): ReactElement {
  // Redux States
  const { appInfoReducer } = useSelector((reducers: ReduxState) => reducers);
  return (
    <div className="reduxEx-container">
      <p>
        Data displayed from
        {' '}
        <strong>Redux</strong>
      </p>
      <p>
        appInfoReducer:
        <pre>{JSON.stringify(appInfoReducer)}</pre>
      </p>
      <GoBack />
    </div>
  );
}
