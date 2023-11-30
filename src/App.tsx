import './App.css'
import { Routes, Route } from 'react-router-dom';
import { List, Details } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' index Component={List} />
      <Route path='/:id/details' Component={Details} />
    </Routes>
  )
}

export default App
