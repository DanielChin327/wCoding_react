import "./ShowContentButtonComponent.css"
import {useState} from 'react'
import ContentComponent from '../ContentComponent/ContentComponent'

function ShowContentButton() {
  const [showContent, setShowContent] = useState(false);


  const handleClick = () => {
    setShowContent(!showContent)
  }


  return(
  <>
  <button className ="button" onClick = {handleClick}>Press</button>
  {showContent && <Content/>}

  </>
  )

}


export default ShowContentButton


// <div className = "hidden">
// <Content></Content>
// </div>
