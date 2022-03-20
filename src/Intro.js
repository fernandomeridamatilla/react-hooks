const MyComponent2 = (props) => {
  const { myProp } = props;

  return <h1> Title: {myProp} </h1>;
};

const MyComponent = ({ myProp }) => {
  return <h1> Title: {myProp} </h1>;
};

const Intro = () => {
  return (
    <div>
      <MyComponent myProp={'My component text'} />
      <MyComponent2 myProp={'My component 2 text'} />
    </div>
  );
};

export default Intro;
