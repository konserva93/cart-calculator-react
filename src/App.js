import './App.css';
import {getProducts} from "./redux/actions/productsActions";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ProductSelector} from "./components/ProductSelector/ProductSelector";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="calc">
        <ProductSelector />
        <hr/>
        <div className="cart"></div>
        <button hidden>Calculate</button>
      </div>
      <div className="result" hidden>
        <label>Result:</label>
        <label>Sum:</label>
      </div>
    </>
  );
}

export default App;
