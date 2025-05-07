import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import useFetch from "./useFetch";

function ProductDetails() {
  const { productid } = useParams();
  const { data1 } = useFetch();
  const products = data1 && data1.filter((product) => product.id == productid);
  const catid = data1 && products.map((cat) => cat.category);

  const categories =
    data1 && data1.filter((product) => product.category == catid);
  //add to cart function

  return (
    <div>
      <Navbar />
      <div className="p-6 pt-28 grid justify-center bg-white">
        <div>
          {data1 &&
            products.map((product) => (
              <div
                key={product.id}
                className="grid md:grid-cols-2 gap-11 items-center h-full bg-white"
              >
                <div className="">
                  <img src={product.image} alt={product.title} className="" />
                </div>
                <div className="grid gap-2">
                  <h2 className="font-bold text-2xl">{product.title}</h2>
                  <p className="text-md text-gray-700">{`${product.rating.rate}(${product.rating.count} Reviews)`}</p>
                  <p className="font-bold text-2xl">{`$${product.price}`}</p>
                  <p className="text-md text-gray-700">{product.description}</p>
                  {/* <p>{category}</p> */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="rounded bg-black hover:opacity-90 hover:cursor-pointer text-white py-2 px-4 text-center w-fit">
                      ADD TO CART
                    </div>
                    <div className="flex flex-nowrap">
                      <div className="border border-gray-700 px-4 py-px text-center text-2xl">
                        -
                      </div>
                      <div className="border border-gray-700 px-4 py-px text-center text-2xl">
                        0
                      </div>
                      <div className="border border-gray-700 px-4 py-px text-center text-2xl">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div>
          <div className="p-6">
            <h2 className="text-xl font-semibold pb-2">You Might Also Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data1 &&
                categories.map(({ title, id, image, price, rating }) => (
                  <Link to={`/products/${id}`} key={id}>
                    <div className="shadow rounded bg-white p-6 min-h-full grid items-center hover:scale-105 transition-transform duration-500 hover:cursor-pointer">
                      <div className="grid justify-centeproducts/:idnamer bg-white">
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
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
export default ProductDetails;
