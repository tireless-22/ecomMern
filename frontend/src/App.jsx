
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from "react-bootstrap"
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen/>

      <Container>
        <h1> is container in the app.js</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
