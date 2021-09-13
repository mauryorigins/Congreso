// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import ToggleStuff from 'Comp/AntdEx/ToggleStuff';
import GoBack from 'Comp/AntdEx/GoBack';

// ----------------------------------------COMPONENT----------------------------------------
export default function AntdEx(): ReactElement {
  return (
    <div className="antdEx-container">
      <ToggleStuff />
      <GoBack />
    </div>
  );
}
