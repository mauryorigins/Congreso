// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import Title from 'components/Home/Title';
import Content from 'components/Home/Content';

// ----------------------------------------COMPONENT----------------------------------------
export default function Home(): ReactElement {
  return (
    <div className="home-container">
      <Title />
      <Content />
    </div>
  );
}
