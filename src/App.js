import './App.css';
import Header from './component/Header';
import ProductCollection from './component/ProductCollection';
import { HashRouter as Router,Routes, Route}  from 'react-router-dom'
import ProductDetails from './component/ProductDetails';


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
