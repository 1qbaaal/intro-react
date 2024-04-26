import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="flex text-white justify-between">
          <Link to="/">
            <div className="flex text-4xl font-bold text-violet-400">Mi.</div>
          </Link>
          <div className="flex text-white gap-32 text-xl justify-between">
            <Link to="/">
              <div className="flex-1">Home</div>
            </Link>
            <Link to="/about">
              <div className="flex-1">About</div>
            </Link>
            <Link to="/project">
              <div className="flex-1">Project</div>
            </Link>
            <Link to="/resume">
              <div className="flex-1">Resume</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
