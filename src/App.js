import ChildComponent from "./components/ChildComponent";

const CommonComponent =()=> {
  return <p>This is a common component</p>;
};

function App() {
  return(
    <div>
      <h1>Hello React</h1>
      <CommonComponent/>
      <CommonComponent/>
      <ChildComponent/>
    </div>
  );
}

export default App;