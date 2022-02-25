
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from "react-bootstrap"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignIn from './screens/SignIn';
import Cart from './screens/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="product">
            <Route path=":id" element={<ProductScreen/>}/>

          </Route>
         
        </Routes>
        <Routes path="cart" element={<Cart/>}> </Routes>

        <Routes path="signin" element={<SignIn />}></Routes>
        
        <Footer />
      </Router>
       {/* <Route path="product/:id" element={<ProductScreen />} /> */}
    </div>
  );
}

export default App;
