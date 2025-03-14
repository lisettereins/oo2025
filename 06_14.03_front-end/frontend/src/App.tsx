import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const sonad = ["Elas", "metsas", "mutionu"];
  const autod = [
    {"mark": "BMW", "mudel": "i5", "year": 2015},
    {"mark": "Audi", "mudel": "TT", "year": 2016},
    {"mark": "Mercedes", "mudel": "S", "year": 2014},
    {"mark": "VW", "mudel": "Golf", "year": 2012}
  ];

  return (
    <>
     {/* <div>{7 + 7}</div>
     <div>7 + 7</div>
     <div>{kogus}</div>
     <div>{count}</div> */}
     {sonad.map(sona => <div key={sona}>{sona}</div> )}
     {autod.map(auto => <div key={auto.mark+auto.mudel}>{auto.mark}</div> )}
    </>
  )
}

// key={}
// React soovib koodi mällu jätta. Kui toimuvad re-renderdused, siis ta jätab kõik mällu v.a.
// tsükli/array sisud, sest tal pole mingit aimu, mille järgi seda meelde jätta.
// selle jaoks, et ta saaks array meelde jätta, lisame key={}

export default App
