import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <>
        <h1 style={{
          textAlign: 'center'
        }}>
          JM CARPINTARIA
        </h1>
      </>
    </div>
  );
}

export default App;
