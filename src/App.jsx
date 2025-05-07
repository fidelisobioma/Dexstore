import ProductDetails from "./components/ProductDetails";
import { DataProvider } from "./context/DataContex";
function App() {
  return (
    <div>
      <DataProvider>
        <ProductDetails />
      </DataProvider>
    </div>
  );
}
export default App;
