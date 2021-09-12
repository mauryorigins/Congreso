// ---Dependencys
import { ReactElement,useState } from 'react'
import { Button } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

// ---AUX COMPONENTS
function Show() {
  return(
    <>
      <CheckCircleOutlined />
      Show
    </>
  )
}
function Hide() {
  return(
    <>
      <CloseCircleOutlined />
      Hide
    </>
  )
}

// ----------------------------------------COMPONENT----------------------------------------
export default function Content(): ReactElement {
  const [flag, setFlag] = useState(true);
  return(
    <>
      <section>
        <p>Hi there!</p>
        <p>
          Switching from <strong>redux</strong> variable
        </p>
        <div>
        <Button type="primary" onClick={()=>setFlag(!flag)}>
          {flag? <Hide />:<Show />}
        </Button>
      </div>
      {flag && <p>Data</p>}
      </section>
    </>
  )
}