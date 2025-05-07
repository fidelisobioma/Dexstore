import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div className="p-4">
      <h1>404 Page not found</h1>
      <Link to="/">Go back to Home page</Link>
    </div>
  );
}
export default Errorpage;
