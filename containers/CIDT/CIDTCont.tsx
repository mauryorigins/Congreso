// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import ToggleStuff from 'Cont/CIDT/components/ToggleStuff';
// ---CommonComps
import GoBack from 'CComps/GoBack';

// ----------------------------------------COMPONENT----------------------------------------
export default function AntdEx(): ReactElement {
  return (
    <div className="antdEx-container">
      <ToggleStuff />
      <GoBack />
    </div>
  );
}
