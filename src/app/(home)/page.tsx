import { ProductsParams } from "../actions/getProducts";
import { Home } from "./Home";

export interface HomeProps {
  searchParams: ProductsParams;
}

export default Home;
