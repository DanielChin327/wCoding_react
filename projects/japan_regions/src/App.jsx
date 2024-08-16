import './App.css'
import { useState } from 'react'
import RegionButton from './components/RegionButton';
import PrefectureList from './components/PrefectureList'

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = {
    Honshu: ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima', 'Nagoya'],
    Kyushu: ['Fukuoka', 'Kumamoto', 'Nagasaki', 'Oita', 'Saga'],
    Hokkaido: ['Sapporo', 'Hakodate', 'Asahikawa'],
    Shikoku: ['Matsuyama', 'Takamatsu', 'Kochi', 'Tokushima']
  };

  const handleShowPrefectures = (region) => {
    setSelectedRegion(selectedRegion === region ? null : region);
  };

  return (
    <>
      <h1> Japan Regions </h1>
      {Object.keys(regions).map((region) => (
        <RegionButton
          key={region}
          region={region}
          onClick={() => handleShowPrefectures(region)}
        />
      ))}
      {selectedRegion && <PrefectureList prefectures={regions[selectedRegion]} />}
    </>
  )
}

export default App;
