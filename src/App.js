import React from 'react';
import { ThemeProvider } from './ThemeContext';
import useFetch from './utils/useFetch';
import Board from './components/Board/Board.jsx';
import './App.css';

function App() {
  const BASE_URL = "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
  const { tickets, users, loading, error } = useFetch(BASE_URL)

  return (
    <ThemeProvider>
      <div className="App">
        <Board tickets={tickets} users={users} />
      </div>
    </ThemeProvider>
  );
}

export default App;

