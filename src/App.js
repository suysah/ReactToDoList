

import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'
import './App.css'

function App() {
  const [item, setItem] = useState(' ')
  const [itemList, setItemList] = useState([])

  function setValue() {

    setItemList((previousItems) => [...previousItems, item]);
    setItem(' ')
    
  }

  function HandelChange(e) {
    setItem(e.target.value)
  }

  function handleDelete(index) {
    setItemList((previousItems) => previousItems.filter((_, i) => i !== index));
  }



  return (
    <div className="container">
    <h1> To-Do-List</h1>
    <input className='inputBar' placeholder="enter here" onChange={HandelChange} value={item} />
    <button className='addBtn' onClick={setValue} >
      Add
    </button>
    <ul>
      {itemList.map((listItem, index) => (
        <Input 
        key={index}
        text={listItem}
        index={index}
        onDelete={handleDelete} />
        ))}
    </ul>
  </div>
  );
}

export default App;
