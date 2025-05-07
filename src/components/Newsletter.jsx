function Newsletter() {
  return (
    <div className="p-6">
      <div className=" md:flex  justify-between items-end bg-black opacity-70 text-white p-6 rounded-md">
        <div className="">
          <div>
            <h2 className="text-xl font-bold">Ready to Get Our New Stuff?</h2>
          </div>
          <div className="mt-2 bg-white p-2 rounded-3xl flex  ">
            <input
              type="email"
              className="text-black bg-white outline-none min-w-[100px]"
              placeholder="Your Email"
            />
            <button className="bg-black rounded-3xl px-2 py-px flex-none">
              Send
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Stuffs to homes and needs.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            animi.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
