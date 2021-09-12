// ---Dependencys
import { ReactElement } from 'react'
// ---Components
import ToggleStuff from 'Comp/ImageExCont/ToggleStuff'
import GoBack from 'components/ImageExCont/GoBack'

// ----------------------------------------COMPONENT----------------------------------------
export default function ImageExCont(): ReactElement {
    return(
      <div className="imagePage-container">
        <ToggleStuff />
        <GoBack />
      </div>
    )
}