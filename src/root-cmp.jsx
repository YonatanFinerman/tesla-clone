import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './assets/styles/main.scss';
import { AppHeader } from './cmps/app-header';
import { HomePage } from './pages/home-page';

function App() {
  return (
    <div className="App">
     <AppHeader/>
     <HomePage/>
    </div>
  );
}

export default App;
