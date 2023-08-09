import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import Data from './Data';
import './App.css';

function App() {

  const cards = Data.map(item => {
    return (
        <Card 
            img={item.image}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
 })

  return (
    <>
    <div className='app'>
      <Navbar />
      <Main />
      <div className='card1'>
      {cards}
      </div>
    </div>
    </>
  );
}

export default App;
