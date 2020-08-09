// import React, { useState } from 'react';

// import Header from './Header'

// import './styles.css'

// function App() {
//   const [counter, setCounter] = useState(0)
//   const [value, setValue] = useState('')

//   function handleCounter(){
//     let val = Number.parseInt(value) || 1
//     setCounter(counterInitial => counterInitial + val)
//   }

//   return (
//     <div className="main">
//       <div>
//         <Header>Contador: {counter}</Header>
//         <input type="text" id="num" value={value} onChange={e => setValue(e.target.value)} placeholder="Valor a ser incrementado" />
//         <button onClick={handleCounter}>Contar</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import './global.css'

import Routes from './routes'

function App() {
  return (
    <Routes />
  );
}

export default App;
