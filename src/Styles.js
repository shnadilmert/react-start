import logo from './logo.svg';

import Test from './Test'
import { useEffect } from 'react';

import styles from './App.module.css'
import {Title} from "./Components.js"
import Bootstrap from './Bootsrap';
import Tailwind from './Tailwind'


function Styles(){


    <div className={styles.App}>

        <Title>{process.env.NODE_ENV} </Title>
        <Title theme="dark">{process.env.NODE_ENV}</Title>

        <p className='env'>
          {process.env.REACT_APP_API_URL}
          <span>test1</span>
        </p>
       
        {process.env.NODE_ENV  === 'production' && (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        
      <Test></Test>
      <Bootstrap></Bootstrap>
      <Tailwind></Tailwind>
    </div>

}

export default Styles