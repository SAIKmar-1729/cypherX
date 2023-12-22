import './App.css';
import useFetch from './utils/useFetch';
import Display from './components/Display/Display.jsx'
function App() {
  const BASE_URL = "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
  const {tickets,users, loading, error} = useFetch(BASE_URL)

  console.log(tickets)
  return (
    <div className="App">
      <Display/>
    </div>
  );
}

export default App;
