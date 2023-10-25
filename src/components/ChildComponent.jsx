import SubChildComponent from "./SubChildComponent";

function ChildComponent() {
  return (
    <div>
      <button>Click</button>
      <SubChildComponent />
    </div>
  );
}

export default ChildComponent;
