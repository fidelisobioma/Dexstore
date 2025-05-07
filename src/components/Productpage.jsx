import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import useFetch from "./useFetch";
function Productpage() {
  const { data1, loading, error } = useFetch();
  if (loading) return <Loading />;
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">{`${error}, check your network connection and try again`}</div>
    );
  return (
    <>
      <Navbar />
      <div className="p-6 pt-28 bg-slate-100">
        {data1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
            {data1.map(({ title, id, image, price, rating }) => (
              <Link to={`/products/${id}`} key={id}>
                <div className="shadow rounded bg-white p-6 min-h-full grid items-center hover:scale-105 transition-transform duration-500 hover:cursor-pointer">
                  <div className="grid justify-center bg-white">
                    <img
                      src={image}
                      alt={title}
                      className="h-48 object-contain"
                    />
                  </div>

                  <div className="pt-10 grid gap-4">
                    <p className="font-md text-gray-500">{`${rating.rate}(${rating.count} Reviews)`}</p>
                    <p className="text-md">{title}</p>
                    <p className="text-xl font-bold">{`$${price}`}</p>
                    {/* <div className=" text-center text-xl font-bold p-2 bg-yellow-500 hover:cursor-pointer text-white rounded">
                      Add to cart
                    </div> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
export default Productpage;
