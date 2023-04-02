import { createElement } from 'react';

import './style.scss'

function App() {

  const todos=['todo1','todo2','todo3']
  /*
  const h1= createElement('h1',null,'adilmertsahin.com')
  const ul=createElement('ul',null,todos.map(todo=>createElement('li',null,todo)))
  return createElement( 'main',{
    className: 'test',
    id: 'main'
  }, h1,ul)
*/

  return (
    <main>
      <h1>adilmertsahin.com</h1>

      <label htmlFor='search'>Ara</label>
      <input type='text' id='search'></input>
      <ul>
        {todos.map((todo,index)=>
          <li key={index}>{todo}</li>)
          }
      </ul>
    </main>
  );

}

export default App;