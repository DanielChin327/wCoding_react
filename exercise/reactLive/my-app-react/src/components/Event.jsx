function Event() {
    let animals = ["cats", "dogs", "snake"];

    const handleEvent = (e) => console.log(e)

    const getArraySize = () => {
      animals.length;
    }
    return (
    <>

      <h1>Event List</h1>
      {getArraySize}
      <ul>
      {animals.map((animal, index) => <li onClick={handleEvent} key={index}>{animal}</li>)}
      </ul>
    </>

    )
// Shortcut to wrap: highlight section, ctrl + p, >wrap, div
}


export default Event
