import {useState} from 'react'
import './Buttons.css'
import PrefectureList from '../PrefectureList/PrefectureList'


function Buttons () {

  const [selectedRegion, setSelectedRegion] = useState(null)



  return (
    <div>
      <div>
        <button style={buttonStyle} onClick={() => setSelectedRegion('Honshu')}>Honshu</button>
        <button style={buttonStyle} onClick={() => setSelectedRegion('Shikoku')}>Shikoku</button>
        <button style={buttonStyle} onClick={() => setSelectedRegion('Kyushu')}>Kyushu</button>
        <button style={buttonStyle} onClick={() => setSelectedRegion('Hokkaido')}>Hokkaido</button>
      </div>
      {selectedRegion && <PrefectureList region={selectedRegion} />}
    </div>
  )

}

export default Buttons
