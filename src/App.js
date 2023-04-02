import { createElement,useState } from 'react';


import Button from './components/Button';
import Tab from './components/Tab';

import './tailwind.css'

function Profile(){
  return(
    <div>Burası profile tabı</div>
  )
}

function App() {

  const todos=['todo1','todo2','todo3']

  const [activeTab,setActiveTab]=useState(1)
  

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

      <button onClick={()=> setActiveTab(2)}> Aktif Tabi Değiştir</button>

    <div style={{padding:20}}>
    <Tab activeTab={activeTab} onChange={tabIndex => setActiveTab(tabIndex)} >
        <Tab.Panel title="Profil"><Profile></Profile></Tab.Panel>
        <Tab.Panel title="Hakkında"></Tab.Panel>
        <Tab.Panel title="Ayarlar"></Tab.Panel>

      </Tab>
      {activeTab == 2 && (
        <div>burası da ekstra bir alan</div>
      )}
    </div>


      <Button text="Merhaba Button"></Button>
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