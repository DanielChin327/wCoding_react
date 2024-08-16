const RamenList = () => {
  const ramenTypes = ['Shoyu', 'Miso', 'Shio', 'Tonkotsu', 'Tsukemen']

  return (
    <ul>
      {ramenTypes.map((ramen, index) => (
        <li key = {index}>{ramen}</li>
      ))}
    </ul>
  )

}

export default RamenList
