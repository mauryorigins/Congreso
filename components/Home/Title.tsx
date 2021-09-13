// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';

// ----------------------------------------COMPONENT----------------------------------------
export default function Title(): ReactElement {
  return (
    <>
      <h1>SteveDevOps</h1>
      <Image
        priority
        src="/images/photo.jpeg" // Route of the image file
        height={160} // Desired size with correct aspect ratio
        width={120} // Desired size with correct aspect ratio
        alt="SteveDevOps"
      />
    </>
  );
}
