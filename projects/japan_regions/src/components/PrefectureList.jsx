const PrefecturedList = ({prefectures}) => {
  return (
    <ul>
      {prefectures.map((prefecture, index) => (
        <li key = {index}>{prefecture}</li>
      ))}
    </ul>

  )

}

export default PrefecturedList
