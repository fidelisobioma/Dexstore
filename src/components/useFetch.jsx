import { useEffect, useState } from "react";
// import Loading from "./Loading";
function useFetch() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const [response, response1] = await Promise.all([
          fetch("https://fakestoreapi.com/products?limit=6", { mode: "cors" }),
          fetch("https://fakestoreapi.com/products", { mode: "cors" }),
        ]);
        if (!response.ok || !response.ok) {
          throw new Error(`${response.status} something went wrong`);
        }
        const gotData = await response.json();
        const gotData1 = await response1.json();
        // console.log(gotData);
        // console.log(gotData1);
        setData(gotData);
        setData1(gotData1);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { data, data1, loading, error };
}
export default useFetch;
