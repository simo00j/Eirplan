import React,{useState} from 'react'
import './App.css';
import HomePage from './components/HomePage';
import UpdatePage from './components/UpdatePage';
import UpdateStand from './components/UpdateStand'; 

function App() {
  
  const listeMotsCles=[
    {id:'c++',name:'c++',key:'c++'},
    {id:'c',name:'c',key:'c'}
  ]
 return ( 
   //<HomePage/>
   //<UpdatePage/>
    <UpdatePage motsCles={listeMotsCles}/>
   );
}

export default App;
