function HelloName() {

  const firstName = "Dan"

  if (firstName != null) {
    return <h1>Hello {console.log({firstName})}</h1>
  }
  return <h1>No name given</h1>

}

export default HelloName;
