import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";

export const ProductSelector = () => {
  const products = useSelector(state => state.products);

  return <div className="selector">
    <label>Add to cart:</label>
    <select id="products">
      <option disabled selected hidden>Select product</option>
      {products.length
        ? products.map(product => <option key={uuidv4()} value={product.price}>{`${product.title} ($${product.price})`}</option>)
        : <option disabled>Loading...</option>
      }
    </select>
  </div>
}
