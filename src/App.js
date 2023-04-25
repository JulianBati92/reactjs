import './App.css';
import Navbar from './Components/Navbar';
import Greeting from './Components/Greeting';

function App() {
  return (
    <div className="App">
      <Navbar navbarLogo={'Tu Matteoli'}/>
      <Greeting name="Julian"/>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            Mi Card
          </div>
          <div className="card-body">
            <h5 className="card-title">Título de la card</h5>
            <p className="card-text">Contenido de la card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
