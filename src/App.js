import React, { useState } from 'react';
import "./App.css";

function App() {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [itemsOnlyInA, setItemsOnlyInA] = useState([]);
  const [itemsOnlyInB, setItemsOnlyInB] = useState([]);
  const [itemsInBoth, setItemsInBoth] = useState([]);
  const [combinedItems, setCombinedItems] = useState([]);
  const [compute,setCompute] = useState(false);

  function handleAddItemsA() {
    setItemsOnlyInA([...itemsOnlyInA, listA]);
    setListA("");
  }
  function handleAddItemsB() {
    setItemsOnlyInB([...itemsOnlyInB, listB]);
    setListB("");
  }

  const handleCompute = () => {
    const arrayA = itemsOnlyInA.map(item => item);
    const arrayB = itemsOnlyInB.map(item => item);
    console.log(arrayA);

    // Find items only in A
    // const onlyInA = arrayA.filter(item => !arrayB.includes(item));
    // setItemsOnlyInA(onlyInA);

    // Find items only in B
    // const onlyInB = arrayB.filter(item => !arrayA.includes(item));
    // setItemsOnlyInB(onlyInB);

    // Find items in both A and B
    const inBoth = arrayA.filter(item => arrayB.includes(item));
    setItemsInBoth(inBoth);

    // Combine items from both A and B (unique)
    const combined = Array.from(new Set([...arrayA, ...arrayB]));
    setCombinedItems(combined);
  };

  return (
    <div className='App'>
      <div className='inputList'>
        <label>List item A:</label>
        <input type="text" value={listA} onChange={e => setListA(e.target.value)} />
        <button onClick={handleAddItemsA}>Add</button>
      </div>
      <div className='inputList'>
        <label>List item B:</label>
        <input type="text" value={listB} onChange={e => setListB(e.target.value)} />
        <button onClick={handleAddItemsB}>Add</button>
      </div>

      <div className='lists'>
        <div>
          <h3>List A</h3>
          <ul className='leftUl'>
            {itemsOnlyInA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>List B</h3>
          <ul>
            {itemsOnlyInB.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className='compute_btn' onClick={()=>{handleCompute();setCompute(true)}}>Compute</button>

      <div className='bothItem'>
        <h3>Items only in A:</h3>
        {
          compute?
          <ul className='leftUl'>
            {itemsOnlyInA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>:
          null
        }
      </div>

      <div className='bothItem'>
        <h3>Items only in B:</h3>
        {
          compute?
          <ul>
            {itemsOnlyInB.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>:
          null
        }
      </div>

      <div className='bothItem'>
        <h3>Items in both A and B:</h3>
        <ul>
          {itemsInBoth.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='combineItem'>
        <h3>Combined items from A and B (unique):</h3>
        <ul className='combineUL'>
          {combinedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;