// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import Title from 'Cont/Home/components/Title';
import Content from 'Cont/Home/components/Content';

// ----------------------------------------COMPONENT----------------------------------------
export default function Home(): ReactElement {
  return (
    <div className="home-container">
      <Title />
      <Content />
    </div>
  );
}
