import './style.css';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data/data.js';

const cards = data.map((element) => <Card key={element.id} {...element}/>)
    
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
