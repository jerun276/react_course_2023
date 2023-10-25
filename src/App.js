const CommonComponent =()=> {
  return <p>This is a common component</p>;
};

function App() {
  return(
    <div>
      <h1>Hello React</h1>
      <CommonComponent/>
      <CommonComponent/>
      <CommonComponent/>
    </div>
  );
}

export default App;