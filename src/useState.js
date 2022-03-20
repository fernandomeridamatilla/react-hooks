// Component,
import { useState } from 'react';

// class App extends Component {
//   state = { contador: 0 };

//   incrementar = () => this.setState({ contador: this.state.contador + 1 });

//   render() {
//     return (
//       <div>
//         <p>Contador: {this.state.contador}</p>
//         <button onClick={this.incrementar}> Incrementar </button>
//       </div>
//     );
//   }
// }

const useContador = (init) => {
  const [contador, setContador] = useState(init);
  const incrementar = () => {
    setContador(contador + 1);
  };

  return [contador, incrementar];
};

const App = () => {
  const [contador, incrementar] = useContador(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}> Incrementar </button>
    </div>
  );
};

export default App;
