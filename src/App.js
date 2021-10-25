
import './App.css';
import Header from './components/Header'
import Mounting from './components/Mounting'
import Updating from './components/Updating'
import Unmounting from './components/Unmounting'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <div style={{backgroundColor:'#1f0241',color:'white',width:'1000px',margin:'auto',fontSize:'30px',lineHeight:'150px'}}>
        <Link to="" style={{padding:'15px',color:'white',textDecoration:'none'}}>   Mounting   </Link>
        <Link to="/Updating" style={{padding:'15px',color:'white',textDecoration:'none'}}>   Updating   </Link>
        <Link to="/Unmounting" style={{padding:'15px',color:'white',textDecoration:'none'}}>   Unmounting   </Link>
      </div>
        <Route exact path="/" component={Mounting} />
        <Route path="/Updating" component={Updating} />
        <Route path="/Unmounting" component={Unmounting} />
        </Router>
    </div>
  );
}

export default App;
