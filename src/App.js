import Nav from '../src/Components/Nav/Nav';
import './App.css';
import Header from '../src/Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../src/Components/About/About';
function App() {
  return (
    <div className="App">
     
      <Nav/>
      <Header/>
      <About/>
      
    </div>
  );
}

export default App;
