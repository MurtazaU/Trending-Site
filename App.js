import './App.css'
import Content from './Components/Content'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';


function App() {
  return (
    <div className="App Container">
      <div className="Row">
          <Header />
      <Content />
   </div>
    </div>
  );
}

export default App;
