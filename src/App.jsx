import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="font-Plus-Jakarta-Sans text-red-500">Hey World</h1>
        <Secondary />
      </div>
    </>
  );
}

export default App;

function Secondary() {
  return (
    <h2 className="font-Plus-Jakarta-Sans text-navy-100">How ya doing?</h2>
  );
}
