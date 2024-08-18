const List = () =>{
  const countries = ['USA', 'Japan', 'South Korea', 'Singapore']

  return (
      <ul>
        {countries.map((element, index) => (
          <li key = {index}>{element}</li>
        ))}

      </ul>
  )

}

export default List
