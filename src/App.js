import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contact.json';

import DisplayContacts from './components/DisplayContacts';
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Search contactList={contacts} />
        <p>
          Contacts
        </p>
        <DisplayContacts contactList={contacts} />
        

      </header>
    </div>
  );
}

export default App;
