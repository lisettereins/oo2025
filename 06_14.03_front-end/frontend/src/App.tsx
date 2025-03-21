//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import ManageProducts from './pages/ManageProducts';
import Arrayd from './pages/Arrayd';
import Menu from './components/Menu';


function App() {

  return (
    <>
   
{/* localhost:5173/ ---> <div>MainPage</div>
    localhost:5173/admin/products --->     <div>ManageProducts</div>
*/}
    {/* Routes'dest üleval menüü */}
      <Menu />

      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/admin/products" element={ <ManageProducts /> } />
        <Route path="/arrays" element={ <Arrayd /> } />
      </Routes>

      {/* käib FOOTER */}
    </>
  )
}

// key={}
// React soovib koodi mällu jätta. Kui toimuvad re-renderdused, siis ta jätab kõik mällu v.a.
// tsükli/array sisud, sest tal pole mingit aimu, mille järgi seda meelde jätta.
// selle jaoks, et ta saaks array meelde jätta, lisame key={}

export default App
