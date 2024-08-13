import {Fragment} from 'react';

function List(){

  return (
    //Fragment is needed for when you write different tags. You can also do empty <> and </> at the ends instead.
    //When adding class, you have to call it className.

     <Fragment>
      <h1> Test</h1>
    <ul className = "lis-stuff">
      <li>First Thing</li>
      <li>Second</li>
      <li>Third</li>
    </ul>

    </Fragment>
    )

}

export default List
