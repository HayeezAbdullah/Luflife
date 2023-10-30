import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbarstyle">
      <div class="container-fluid">
        <motion.button
          class="navbar-toggler navbarbutton p-2 my-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          whileTap={{ x: 20 }}
        >
          Menu
        </motion.button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <img src="./logo.png" alt="Luflife" className="navbarlogo" />
            LufLife
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/posts" className="navlink">
                <p class="nav-link my-auto">Posts</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/create" className="navlink">
                <p class="nav-link my-auto">Create</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="navlink">
                <p class="nav-link my-auto">About</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
