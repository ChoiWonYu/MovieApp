import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Menubar from './pages/Menubar';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import './App.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Menubar/>}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies/>}>
          <Route path=":movieId" element={<Movie/>}/>
        </Route>
        <Route path="/*" element={<div>There`s nothing here</div>}/>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
