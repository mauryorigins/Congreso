// ---Dependencys
import { ReactElement } from 'react'
import Link from "next/link";

// ----------------------------------------COMPONENT----------------------------------------
export default function Content(): ReactElement {
  return(
    <>
      <section>
        <p>Hi there!</p>
        <p>
          Awesome developer playing with <strong>next js</strong>, having fun so far...
        </p>
        <h2>
          <Link href="/ImageExPage">
            <a>To ImageEx</a>
          </Link>
        </h2>
      </section>
    </>
  )
}