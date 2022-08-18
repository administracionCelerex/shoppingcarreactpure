import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <ul class="card-wrapper">
        <ProductCard name="Celular" description="dadad" price={100} />
        
      </ul>
    </div>
  );
}

export default App;
