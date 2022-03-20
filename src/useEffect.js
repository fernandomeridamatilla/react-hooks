import { useState, useEffect, Component } from 'react';

const useContador = (init) => {
  const [contador, setContador] = useState(init);
  const incrementar = () => {
    setContador(contador + 1);
  };

  return [contador, incrementar];
};

// const Interval = ({ contador }) => {
//   useEffect(() => {
//     const i = setInterval(() => {
//       console.log(contador);
//     }, 1000);
//     return () => clearInterval(i);
//   }, [contador]);

//   return <p> Intervalo </p>;
// };

class Interval extends Component {
  intervalo = null;

  componentDidMount() {
    this.intervalo = setInterval(() => {
      console.log(this.props.contador);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    return <p> Intervalo </p>;
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0);
  useEffect(() => {
    document.title = contador;
    console.log('use effec');
  }, [contador]);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}> Incrementar </button>
      <Interval contador={contador} />
    </div>
  );
};

export default App;
