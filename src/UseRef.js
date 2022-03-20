import { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef();
  const ref = useRef();

  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = 'text has changed';
  };
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}> Focus</button>
      <h1 onClick={click} ref={ref}>
        text
      </h1>
    </div>
  );
};

export default UseRef;
