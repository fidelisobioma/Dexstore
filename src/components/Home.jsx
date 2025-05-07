import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
function Home() {
  const { data, loading, error } = useFetch();
  if (loading) return <Loading />;
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">{error}</div>
    );
  return (
    <div>
      <Navbar />
      <div className="p-6 pt-28 bg-black opacity-70 text-white h-[450px] grid items-center justify-center">
        <h1 className="text-6xl">
          All you need in <br />
          Dex<span className="text-pink-800">store</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center p-6">
        <div>
          <h2 className="font-semibold">FREE SHIPPING WORLDWIDE</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <h2 className="font-semibold">24/7 CUSTOMER SERVICE</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <h2 className="font-semibold">MONEY BACK GAURRANTY</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="bg-slate-100 p-6">
        <h2 className="text-xl font-semibold pb-2">Explore Our Products</h2>
        {data && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
            {data.map(({ title, id, image, price, rating }) => (
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
        <Link to="products/">
          <p className="text-pink-800 py-2">See all...</p>
        </Link>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
export default Home;
