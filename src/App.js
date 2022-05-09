import './App.css';
import Header from './container/Header';
import ProductCollection from './container/ProductCollection';
import { BrowserRouter as Router,Routes, Route}  from 'react-router-dom'
import ProductDetails from './container/ProductDetails';


function App() {
  return (
    <div className="App">
    <Router>
   
      <Header/>
        <Routes>
         <Route path='/' exact element={<ProductCollection/>}/>
         <Route path='/Product/:productId' element={<ProductDetails/>}/>
        </Routes>

       </Router>

    </div>
  );
}

export default App;
