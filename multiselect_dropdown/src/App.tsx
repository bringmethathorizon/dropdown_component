import React, {useState} from 'react';
import './App.css';
import {SearchComponent} from './components/SearchComponent';

const testValue = 'first name';

function App() {

    const onChangeText = () => {
      alert('message')
    };

  return (
    <div>
       <SearchComponent
            placeholder="Find Items"
            value={testValue}
            onChange={onChangeText}
       />
    </div>
  );
}

export default App;
