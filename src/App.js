import logo from './logo.svg';
import{Header} from './components/header'
import{Carosol} from './components/cars'
import{Band} from './components/band'
import{Tour} from './components/tour'
import{Contact} from './components/contact'
import{Map} from './components/map'
 import './App.css';
import { Footer } from './components/footer';

const App=() =>{
  return (
    <div>
     <Header classname="stick-h"/>
     <Carosol id="caro"/>
     <Band id="brand"/>
     <Tour id="tour"/>
     <Contact id="contact"/>
     <Map/>
     <Footer/>
    </div>
  );
}

export default App;
