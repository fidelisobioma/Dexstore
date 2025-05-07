function Footer() {
  return (
    <div className="">
      <div className="p-6 flex flex-wrap gap-4 justify-between items-center">
        <div className="flex justify-between gap-8">
          <div>
            <h2 className="font-bold">About</h2>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Meet The Team</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shopping</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Socail Media</h2>
          <div className="flex gap-4">
            <div className="size-6 p-4 bg-black text-white rounded-full font-bold flex items-center justify-center">
              x
            </div>
            <div className="size-6 p-4 bg-black text-white rounded-full font-bold flex items-center justify-center">
              f
            </div>
            <div className="size-6 p-4 bg-black text-white rounded-full font-bold flex items-center justify-center">
              ins
            </div>
            <div className="size-6 p-4 bg-black text-white rounded-full font-bold flex items-center justify-center">
              ig
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-6 flex flex-wrap gap-4 justify-between items-center">
        <div>
          <p>Copyrught &copy; 2025Dexstore. All right reserved</p>
        </div>
        <div className="flex gap-4">
          <p>Terms of service</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
