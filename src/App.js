import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Guarantee from './components/Guarantee/Guarantee';

import img from './assets/posicionado.png';

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <Guarantee />
      <>
        <h1 style={{
          textAlign: 'center',
          padding: '10px',
          backgroundColor: 'rgb(254, 192, 134)',
          color: 'rgb(128, 60, 0)',
          border: '5px solid rgb(128, 60, 0)'
        }}>
          JM CARPINTARIA
        </h1>
        <img className='jmzinho' src={img} alt=''/>
      </>
    </div>
  );
}

export default App;
